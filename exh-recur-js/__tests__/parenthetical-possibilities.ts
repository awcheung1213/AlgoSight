test_00:
parentheticalPossibilities('x(mn)yz'); // -> 
// [ 'xmyz', 'xnyz' ]
test_01:
parentheticalPossibilities("(qr)ab(stu)c"); // ->
// [ 'qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc' ]
test_02:
parentheticalPossibilities("taco"); // ->
// ['taco']
test_03:
parentheticalPossibilities(""); // ->
// ['']
test_04:
parentheticalPossibilities("(etc)(blvd)(cat)"); // ->
// [
//  'ebc', 'eba', 'ebt', 'elc', 'ela',
//  'elt', 'evc', 'eva', 'evt', 'edc',
//  'eda', 'edt', 'tbc', 'tba', 'tbt',
//  'tlc', 'tla', 'tlt', 'tvc', 'tva',
//  'tvt', 'tdc', 'tda', 'tdt', 'cbc',
//  'cba', 'cbt', 'clc', 'cla', 'clt',
//  'cvc', 'cva', 'cvt', 'cdc', 'cda',
//  'cdt'
// ]
