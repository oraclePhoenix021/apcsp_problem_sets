var _0x5302=["\x64\x69\x73\x61\x62\x6C\x65\x64","\x67\x65\x6E\x65\x72\x61\x74\x65\x2D\x62\x74\x6E","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x73\x74\x61\x72\x74\x2D\x62\x74\x6E","\x62\x69\x6E\x61\x72\x79","\x45\x6E\x74\x65\x72\x20\x61\x6E\x20\x69\x6E\x74\x65\x67\x65\x72\x20\x76\x61\x6C\x75\x65\x2E","\x6C\x65\x6E\x67\x74\x68","\x66\x6C\x6F\x6F\x72","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x73\x65\x61\x72\x63\x68\x2D\x72\x65\x73\x75\x6C\x74\x73","\x53\x45\x41\x52\x43\x48\x20\x52\x45\x53\x55\x4C\x54\x53\x3A\x20\x49\x4E\x20\x50\x52\x4F\x47\x52\x45\x53\x53\x2E\x2E\x2E","\x53\x45\x41\x52\x43\x48\x20\x52\x45\x53\x55\x4C\x54\x53\x3A\x20","\x20\x77\x61\x73\x20\x66\x6F\x75\x6E\x64\x20\x61\x74\x20\x69\x6E\x64\x65\x78\x20","\x2E","\x20\x77\x61\x73\x20\x6E\x6F\x74\x20\x66\x6F\x75\x6E\x64\x2E","\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72","\x73\x74\x79\x6C\x65","\x62\x61\x72","\x62\x6C\x75\x65\x76\x69\x6F\x6C\x65\x74","\x63\x68\x61\x72\x74\x72\x65\x75\x73\x65","\x67\x6F\x6C\x64","\x6C\x69\x67\x68\x74\x73\x6B\x79\x62\x6C\x75\x65"];function search(){reset();document[_0x5302[2]](_0x5302[1])[_0x5302[0]]= true;document[_0x5302[2]](_0x5302[3])[_0x5302[0]]= true;animate(_0x5302[4],parseInt(prompt(_0x5302[5])))}function animateBinarySearch(_0xa3a1x3){var _0xa3a1x4=false;var _0xa3a1x5=0;var _0xa3a1x6=_0xa3a1x5;var _0xa3a1x7=list[_0x5302[6]]- 1;var _0xa3a1x8=_0xa3a1x7;var _0xa3a1x9=Math[_0x5302[7]]((_0xa3a1x5+ _0xa3a1x7)/ 2);var _0xa3a1xa=_0xa3a1x9;function _0xa3a1xb(_0xa3a1x4,_0xa3a1x5,_0xa3a1x6,_0xa3a1x7,_0xa3a1x8,_0xa3a1x9,_0xa3a1xa){document[_0x5302[2]](_0x5302[9])[_0x5302[8]]= _0x5302[10];var search=setInterval(function(){_0xa3a1xa= _0xa3a1x9;_0xa3a1x9= Math[_0x5302[7]]((_0xa3a1x5+ _0xa3a1x7)/ 2);if(_0xa3a1x5!= _0xa3a1x6){unhighlight(_0xa3a1x6)};if(_0xa3a1x7!= _0xa3a1x8){unhighlight(_0xa3a1x8)};if(_0xa3a1x9!= _0xa3a1xa){unhighlight(_0xa3a1xa)};highlight(false,_0xa3a1x5,true);highlight(false,_0xa3a1x7,true);if(list[_0xa3a1x9]=== _0xa3a1x3){_0xa3a1x4= true;highlight(true,_0xa3a1x9,false)}else {highlight(false,_0xa3a1x9,false);if(list[_0xa3a1x9]> _0xa3a1x3){_0xa3a1x8= _0xa3a1x7;_0xa3a1x7= _0xa3a1x9- 1}else {_0xa3a1x6= _0xa3a1x5;_0xa3a1x5= _0xa3a1x9+ 1}};clearInterval(search);if(!_0xa3a1x4&& _0xa3a1x5<= _0xa3a1x7){_0xa3a1xb(_0xa3a1x4,_0xa3a1x5,_0xa3a1x6,_0xa3a1x7,_0xa3a1x8,_0xa3a1x9,_0xa3a1xa)}else {document[_0x5302[2]](_0x5302[1])[_0x5302[0]]= false;document[_0x5302[2]](_0x5302[3])[_0x5302[0]]= false;if(_0xa3a1x4){document[_0x5302[2]](_0x5302[9])[_0x5302[8]]= _0x5302[11]+ _0xa3a1x3+ _0x5302[12]+ _0xa3a1x9+ _0x5302[13]}else {if(_0xa3a1x5> _0xa3a1x7){unhighlight(_0xa3a1x9);document[_0x5302[2]](_0x5302[9])[_0x5302[8]]= _0x5302[11]+ _0xa3a1x3+ _0x5302[14]}}}},delay)}_0xa3a1xb(_0xa3a1x4,_0xa3a1x5,_0xa3a1x6,_0xa3a1x7,_0xa3a1x8,_0xa3a1x9,_0xa3a1xa)}function highlight(_0xa3a1x4,_0xa3a1xd,_0xa3a1xe){if(_0xa3a1xe){document[_0x5302[2]](_0x5302[17]+ _0xa3a1xd)[_0x5302[16]][_0x5302[15]]= _0x5302[18]};if(_0xa3a1x4){document[_0x5302[2]](_0x5302[17]+ _0xa3a1xd)[_0x5302[16]][_0x5302[15]]= _0x5302[19]}else {if(!_0xa3a1x4&&  !_0xa3a1xe){document[_0x5302[2]](_0x5302[17]+ _0xa3a1xd)[_0x5302[16]][_0x5302[15]]= _0x5302[20]}}}function unhighlight(_0xa3a1xd){document[_0x5302[2]](_0x5302[17]+ _0xa3a1xd)[_0x5302[16]][_0x5302[15]]= _0x5302[21]}function reset(){unhighlightAll();document[_0x5302[2]](_0x5302[9])[_0x5302[8]]= _0x5302[11]}function unhighlightAll(){for(var _0xa3a1xd=0;_0xa3a1xd< list[_0x5302[6]];_0xa3a1xd++){unhighlight(_0xa3a1xd)}}function binarySearch(_0xa3a1x3){var _0xa3a1x5=0;var _0xa3a1x7=list[_0x5302[6]]- 1;while(_0xa3a1x5<= _0xa3a1x7){var _0xa3a1x9=Math[_0x5302[7]]((_0xa3a1x5+ _0xa3a1x7)/ 2);if(list[_0xa3a1x9]=== _0xa3a1x3){return _0xa3a1x9}else {if(list[_0xa3a1x9]> _0xa3a1x3){_0xa3a1x7= _0xa3a1x9- 1}else {if(list[_0xa3a1x9]< _0xa3a1x3){_0xa3a1x5= _0xa3a1x9+ 1}}}};return -1}
