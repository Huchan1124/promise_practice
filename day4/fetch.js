const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
fetch(url)
.then(res=> res.json()) //資料先轉成json檔
.then(data => console.log(data))
.catch(error => console.log('Error Message:'+ error))