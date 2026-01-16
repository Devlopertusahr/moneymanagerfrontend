//export const BASE_URL = "http://localhost:8080/api/v1.0";
export const BASE_URL = "https://money-manager-backend2.onrender.com/api/v1.0";

const CLOUDINARY_CLOUD_NAME = "dqaoz5cod";

export const API_ENDPOINTS = {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
    GET_USER_INFO: `${BASE_URL}/profile`,
    GET_ALL_CATEGORIES: `${BASE_URL}/categories`,
    ADD_CATEGORY: `${BASE_URL}/categories`,
    UPDATE_CATEGORY: (categoryId) => `${BASE_URL}/categories/${categoryId}`,
    GET_ALL_INCOMES: `${BASE_URL}/incomes`,
    CATEGORY_BY_TYPE: (type) => `${BASE_URL}/categories/${type}`,
    ADD_INCOME: `${BASE_URL}/incomes`,
    DELETE_INCOME: (incomeId) => `${BASE_URL}/incomes/${incomeId}`,
    INCOME_EXCEL_DOWNLOAD: `${BASE_URL}/excel/download/income`,
    EMAIL_INCOME: `${BASE_URL}/email/income-excel`,
    GET_ALL_EXPENSE: `${BASE_URL}/expenses`,
    ADD_EXPENSE: `${BASE_URL}/expenses`,
    DELETE_EXPENSE: (expenseId) => `${BASE_URL}/expenses/${expenseId}`,
    EXPENSE_EXCEL_DOWNLOAD: `${BASE_URL}/excel/download/expense`,
    EMAIL_EXPENSE: `${BASE_URL}/email/expense-excel`,
    APPLY_FILTERS: `${BASE_URL}/filter`,
    DASHBOARD_DATA: `${BASE_URL}/dashboard`,
    UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
    ACTIVATE: `${BASE_URL}/activate`,  // Add this if you have activation
    HEALTH: `${BASE_URL}/health`        // For testing
}
