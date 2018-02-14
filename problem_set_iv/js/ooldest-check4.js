function check(exercise, input1, input2, input3, input4, input5, input6)
{
  switch (exercise)
  {
    case 'mario':
      document.getElementById('mario-easy-result').innerHTML = 'For Problem Set 4, you\'ll need to ' +
        'test your code thoroughly. A feedback script will be provided later.';
      break;
    case 'mario-again':
      document.getElementById('mario-hard-result').innerHTML = 'For Problem Set 4, you\'ll need to ' +
        'test your code thoroughly. A feedback script will be provided later.';
      break;
    case 'credit':
      document.getElementById('credit-result').innerHTML = 'For Problem Set 4, you\'ll need to ' +
        'test your code thoroughly. A feedback script will be provided later.';
      break;
    case 'guess':
      document.getElementById('guess-result').innerHTML = 'For Problem Set 4, you\'ll need to ' +
        'test your code thoroughly. A feedback script will be provided later.';
      break;
    case 'hurricane':
      document.getElementById('hurricane-result').innerHTML = 'For Problem Set 4, you\'ll need to ' +
        'test your code thoroughly. A feedback script will be provided later.';
      break;
    case 'gymnastics':
      document.getElementById('gymnastics-result').innerHTML = 'For Problem Set 4, you\'ll need to ' +
        'test your code thoroughly. A feedback script will be provided later.';
      break;
    case 'report-card':
      document.getElementById('report-card-result').innerHTML = 'For Problem Set 4, you\'ll need to ' +
        'test your code thoroughly. A feedback script will be provided later.';
      break;
    default:
      console.log('ERROR: Unknown exercise \'' + exercise + '\'');
      break;
  }
}
