const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = { 
  run: ['01-01', '01-02', '01-06','01-07', '01-08'], 
  water: ['01-02', '01-05','01-06','01-07', '01-08'],
  gym: ['01-03', '01-04','01-06','01-07', '01-08'],
  sleep: ['01-04', '01-03','01-06','01-07', '01-08'],
  walk: ['01-05', '01-02','01-06','01-07', '01-08'],
  food: ['01-06', '01-01','01-06','01-07', '01-08'],
}

nlwSetup.setData(data);
nlwSetup.load();
nlwSetup.renderLayout();