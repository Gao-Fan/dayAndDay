/**
 * 恶心的表达式
 */

console.log(([][[]] + [])[+!![]] + ([] + {})[+!![] + +!![]]);

([][[]] + [])[+!![]] + ([] + {})[+!![] + +!![]]

// step1:
([][''] + [])[1] + ([] + {})[+!![] + +!![]]

// step2:
('undefined' + '')[1] + ([] + {})[+!![] + +!![]]

// step3:
'n' + ([] + {})[+!![] + +!![]]

// step4:
'n' + ('' + '[object object]')[+!![] + +!![]]

// step5:
'n' + ('' + '[object object]')[1 + 1]

// step6:
'n' + '[object object]'[2]

// step7:
'nb'
([][[]] + [])[+!![]] + ([] + {})[+!![] + +!![]]