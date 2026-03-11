import { useState, useEffect, useCallback } from 'react';
import type Student from '../types/Student';
import type StudentFormData from '../types/StudentFormData';

const API_URL = 'http://localhost:8080/api';

export function useStudents() {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStudents = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/items`);
            if (!response.ok) throw new Error('Failed to fetch students');
            const data: Student[] = await response.json();
            setStudents(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }, []);

    const addStudent = async (studentData: StudentFormData) => {
        const response = await fetch(`${API_URL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // <--- Sin esto, Spring Boot devuelve Error 415
            },
            body: JSON.stringify(studentData),
        });

        if (response.ok) {
            await fetchStudents(); // Esta línea es vital para que la tabla se actualice sola
            return true;
        }
        return false;
    };

    useEffect(() => {
        fetchStudents();
    }, [fetchStudents]);

    return { students, loading, error, addStudent };
}