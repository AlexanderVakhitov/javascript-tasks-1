'use strict';

var hours = process.argv[2];
var minutes = process.argv[3];

var string = '';
var arabicNumbers = [0, 1, 4, 5, 9, 10, 40, 50];
var romanNumbers = [
    ['          ',
     '          ',
     '          ',
     ' ++++++++ ',
     ' ++++++++ ',
     '          ',
     '          ',
     '          '
    ],
    [' ++++++++ ',
     '    ++    ',
     '    ++    ',
     '    ++    ',
     '    ++    ',
     '    ++    ',
     '    ++    ',
     ' ++++++++ '
    ],
    [' ++++++++ ++    ++ ',
     '    ++    ++    ++ ',
     '    ++    ++    ++ ',
     '    ++     ++  ++  ',
     '    ++     ++  ++  ',
     '    ++      ++++   ',
     '    ++      ++++   ',
     ' ++++++++    ++    ' ],
    [' ++    ++ ',
     ' ++    ++ ',
     ' ++    ++ ',
     '  ++  ++  ',
     '  ++  ++  ',
     '   ++++   ',
     '   ++++   ',
     '    ++    '
    ],
    [' ++++++++ ++    ++ ',
     '    ++    ++    ++ ',
     '    ++     ++  ++  ',
     '    ++      ++++   ',
     '    ++      ++++   ',
     '    ++     ++  ++  ',
     '    ++    ++    ++ ',
     ' ++++++++ ++    ++ '
    ],
    [' ++    ++ ',
     ' ++    ++ ',
     '  ++  ++  ',
     '   ++++   ',
     '   ++++   ',
     '  ++  ++  ',
     ' ++    ++ ',
     ' ++    ++ '
    ],
    [' ++    ++ ++       ',
     ' ++    ++ ++       ',
     '  ++  ++  ++       ',
     '   ++++   ++       ',
     '   ++++   ++       ',
     '  ++  ++  ++       ',
     ' ++    ++ ++       ',
     ' ++    ++ ++++++++ '
    ],
    [' ++       ',
     ' ++       ',
     ' ++       ',
     ' ++       ',
     ' ++       ',
     ' ++       ',
     ' ++       ',
     ' ++++++++ '
    ]
];
var separator = [
    '          ',
    '     ++   ',
    '     ++   ',
    '          ',
    '          ',
    '     ++   ',
    '     ++   ',
    '          '
];

string = fromArabicToRoman(hours, minutes);
if (string)
{
    console.log('Ваше время:');
    console.log(string);
}
else
{
    console.log('Ошибка! Неверно введенные данные!');
}

function fromArabicToRoman(hours, minutes)
{
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);

    /* Проверка на числовое значение. */
    if (isNaN(hours) || isNaN(minutes))
    {
<<<<<<< HEAD
        console.error('Ошибка! Введено не числовое значение!');
        return;
=======
        console.error("Ошибка! Введено не числовое значение!\r\n");
        return undefined;
>>>>>>> 80ca5dc233de7b3edb69e1bdf486b4362d3dfc50
    }
    /* Проверка на диапазон значений. */
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
    {
<<<<<<< HEAD
        console.error('Ошибка! Введены неверные значения!');
        return;
=======
        console.error("Ошибка! Введены неверные значения!\r\n");
        return undefined;
>>>>>>> 80ca5dc233de7b3edb69e1bdf486b4362d3dfc50
    }

    /* Перевод времени в римские цифры. */
    var result = integerToRoman(hours);
    result = result.concat([separator], integerToRoman(minutes));

    return makeString(result);
}

function makeString(array)
{
    var string = '';

    /* Преобразуем в строку для вывода в консоль. */
    for (var i=0; i<array[0].length; ++i)
    {
        for (var j=0; j<array.length; ++j)
        {
            string += array[j][i];
        }
        string += '\r\n';
    }

    return string;
}

function integerToRoman(number)
{
    var result = [];

    /* Обработка нуля. */
    if (number === 0)
    {
        result.push(romanNumbers[0]);
    }
    /* Обработка остальных значений. */
    else
    {
        var index = arabicNumbers.length;
        while(index > 0)
        {
            while(number >= arabicNumbers[index])
            {
                number -= arabicNumbers[index];
                result.push(romanNumbers[index]);
            }
            --index;
        }
    }

<<<<<<< HEAD
    return result;
}
=======
    return tmp;
}
>>>>>>> 80ca5dc233de7b3edb69e1bdf486b4362d3dfc50
