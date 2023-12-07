const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;
export const endPoints = {
  pdfCreate: `${backendBaseUrl}/pdf`,
  allPdf: `${backendBaseUrl}/pdf/get-all-pdf`,
  getPdf: `${backendBaseUrl}/pdf/get-pdf`,
  login: `${backendBaseUrl}/pdf/login`,
};
