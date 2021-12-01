import { server, api_exam } from '../constants';
import httpClient from '../httpClient';

// exam/get
export const getExam = async (values) => {
    const res =  await httpClient.post(server.EXAM_URL+api_exam.GET, values);

    if (res.data.result == 'nOK') {
        return {valid: 'NO', data: res.data.message}
    } else if (res.data.result == 'OK') {
        return {valid: 'YES', data: res.data.data}
    }
    else {
        return {valid: 'FAIL', data: ''}
    }
};

// exam/get/all
export const getAllExam = async (values) => {
    return await httpClient.post(server.EXAM_URL+api_exam.GET_ALL, values);
};

// exam/submit
export const examStdSubmit = async (values) => {
    const res =  await httpClient.patch(server.EXAM_URL+api_exam.STD_SUBMIT, values);

    if (res.data.result == 'nOK') {
        return {valid: 'NO', data: res.data.message}
    } else if (res.data.result == 'OK') {
        return {valid: 'YES', data: res.data.data}
    }
    else {
        return {valid: 'FAIL', data: ''}
    }
};

// exam/score/subjective
export const examTeacherScoreSubjective = async (values) => {
    return await httpClient.patch(server.EXAM_URL+api_exam.SUBJ_TEACHER_SCORE, values);
};

// exam/result/teacher
export const getExamResultTeacher = async (values) => {
    return await httpClient.patch(server.EXAM_URL+api_exam.TEACHET_GET_RESULT, values);
};

// exam/create
export const createExam = async (values) => {
    return await httpClient.post(server.EXAM_URL+api_exam.CREATE, values);
};