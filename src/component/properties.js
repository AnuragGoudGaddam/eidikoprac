import { data } from "jquery";

// const DOMAIN = process.env.REACT_APP_DOMAIN;
const CONTEXTROOT = process.env.REACT_APP_CONTEXTROOT;
const PROTOCOL = window.location.protocol;
const DOMAIN = window.location.host;
console.log(`Dynamic server url:  ${PROTOCOL}//${DOMAIN}/${CONTEXTROOT}`);
// const OA_SERVICE_URL = `http://localhost:3001`;
const OA_SERVICE_URL = `${PROTOCOL}//${DOMAIN}/${CONTEXTROOT}`;
 const OA_RESERVEFUND_URL = `http://localhost:5050`;
// const OA_RESERVEFUND_URL = `${PROTOCOL}//${DOMAIN}/${CONTEXTROOT}`;
console.log(OA_SERVICE_URL);
export const properties = {
  loginURL: `${OA_SERVICE_URL}/login`,
  userAuth: `${OA_SERVICE_URL}/auth`,
  searchResult: `${OA_SERVICE_URL}/search/getPaymentData`,
  attachmentUpdate: `${OA_SERVICE_URL}/completedrequest/updateData`,
  managementCompanyList: `${OA_SERVICE_URL}/attachment/managementCompany/`,
  saveAttachmentData: `${OA_SERVICE_URL}/attachment/saveAttachmentData`,
  getMatrixRefNo: `${OA_SERVICE_URL}/attachment/getMatrixNo/`,
  displayAttachmentDetails: `${OA_SERVICE_URL}/completedrequest/pymtReqId/`,
  getCompletedRequests: `${OA_SERVICE_URL}/completedrequest/getCompletedRequests`,
  getPaymentData: `${OA_SERVICE_URL}/payment/getPaymentData`,
  searchPaymentData: `${OA_SERVICE_URL}/payment/searchPaymentData`,
  excelUpload: `${OA_SERVICE_URL}/payment/excelUpload`,
  supplierList: `${OA_SERVICE_URL}/reports/supplierList`,
  generateReports: `${OA_SERVICE_URL}/reports/getReportList`,
  reportsExcel: `${OA_SERVICE_URL}/reports/excelGenerate`,
  reportsPDF: `${OA_SERVICE_URL}/reports/pdfGenerate`,
  loadingExpDates: `${OA_SERVICE_URL}/attachment/getExpiryDates/`,
  transactionalPdf: `${OA_SERVICE_URL}/transactional/pdfGenerate`,
  transactionalExcel: `${OA_SERVICE_URL}/transactional/excelGenerate`,
  generateTransactionalReports: `${OA_SERVICE_URL}/transactional/getReportsList`,
  exceptionUpdate: `${OA_SERVICE_URL}/exception/queue/updateData`,
  bulkPaymentColumns: `${OA_SERVICE_URL}/exceptionUpdate`,
  paymentColumns: `${OA_SERVICE_URL}/attachmentField`,
  getBuilding: `${OA_SERVICE_URL}/properties/groupNames`,
  getBuildingsByMgmtComp: `${OA_SERVICE_URL}/payment/getBuildings`,
  getBulkPayment: `${OA_SERVICE_URL}/exception/queue/bulkpayments/list`,
  attachmentFieldReq: `${OA_SERVICE_URL}/attachmentFieldcomplreq`,
  documentPath: `${OA_SERVICE_URL}/documentpath`,
  getPath: `${OA_SERVICE_URL}/documents`,
  getListDocuments: `${OA_SERVICE_URL}/documents/pymtReqId`,
  fileUpload: `${OA_SERVICE_URL}/saveDocument/`,
  loadAttachmentDetails: `${OA_SERVICE_URL}/exception/queue/pymtReqId`,
  individualPaymentsList: `${OA_SERVICE_URL}/exception/queue/individualpayments/list`,
  buildingNames: `${OA_SERVICE_URL}/buildings/buildingNames`,
  budgetDetails: `${OA_SERVICE_URL}/budget/budgetDetails`,
  updateBudget: `${OA_SERVICE_URL}/budget/updateBudget`,
  completedRequestList: `${OA_SERVICE_URL}/completedrequest/completedRequests`,
  completedPdf: `${OA_SERVICE_URL}/completedrequest/pdfGenerate`,
  completedExcel: `${OA_SERVICE_URL}/completedrequest/excelGenerate`,
  individualDataList: `${OA_SERVICE_URL}/exception/queue/individualpayments`,
  bulkDataList: `${OA_SERVICE_URL}/exception/queue/bulkpayments`,
  downloadPDF: `${OA_SERVICE_URL}/reports/downloadPDF`,
  dataURl:`${OA_SERVICE_URL}`,
  fetchReserveFundData:`${OA_SERVICE_URL}/data`,
  saveReserveFundData:`${OA_SERVICE_URL}/dataSave`,
  reserveFundUpdateDetail:`${OA_SERVICE_URL}/dataUpdate`,
};
