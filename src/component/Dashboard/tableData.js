/**
 * A collection of string in objects based on modules for displaying as labels.  
 * This file is created for the purpose - if any or all label/static data needs to be changed in future,
 * changes needs to be done only in this file rather than changing in complete project.
 * This ensures that changes can be viewed/reviewed in git in easy manner and handling is easy.              
 */
const viewAll = {
  activeCases: {
      title: "Title 1"
  },
  allCases: {
      title: "Title 2"
  }
}

const dashboardTitle = 'Dashboard'
const adminDashboardTitle = 'Admin Dashboard'
const tableHeaders = {
  caseRefernece : '<Field 2>',
  sasCaseId : '<Field 3>',
  cifId:'<Field 4>',
  alteredEntityNumber:'<Field 5>',
  primaryEntityName:'<Field 6>',
  ageing: '<Field 7>',
  alertCreationDate: '<Field 8>',
  createrUserId: '<Field 9>',
  assignedTo:'<Field 10>',
  caseCreatedDate:'<Field 11>',
  status:'<Field 12>'
}
const label = {
  cases: 'Cases',
  risk: 'Risk Score',
  performance: 'My Performance',
  productivity: 'Productivity',
  chartText : 'You are 60% more productive this month!',
  AddOptions : 'Add Controls',
  mapping :'Mapping Controls'
  
}

const fileUpload = {
  fileSizeLimit : 'Total file size exceeded. Maximum total file size is 15 MB.',
  placeholderText: 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
  maxFileSizeAllowed : 'File is too large. Maximum file size allowed is 15 MB',
  errorMessage: 'Error while uploading file. Please try again',
  successMessage: 'File uploaded successfully'
}

const caseCustomerDetails = {
  caseDetails: {
      title: "Case Details",
      chip: "Cases",
      caseId: " Case ID: #",
      cifNo: "CIF No",
      accountType: "Account Type",
      customerType: "Customer Type",
      ageOfRealtionship: "Label 1",
      rm: "Label 2",
      groupSegment: "Label 3",
      nationality: "Label 4 ",
      caseStatus: "Label 5",
      caseCreatedDate: "Lable 6",
      deadLine: "Label 7",
      latestData: "Label 8",
      crsRiskScore: "Label 9",
      crsLoadDate: "Label 10",
      l1Checker: "Label 11",
      l2Checker: "Label 12"
  },
  labels: {
      riskScore: "Risk Score",
      noUBO: "No of UBO\'s",
      doBirth: "Date of Birth",
      profession: "Profession",
      sourceOfIncome: "Source of Income",
  }
}

export {
  viewAll,
  tableHeaders,
  dashboardTitle,
  label,
  fileUpload,
  caseCustomerDetails,
  adminDashboardTitle
}