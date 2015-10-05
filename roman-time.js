'use strict';

var hours = process.argv[2];
var minutes = process.argv[3];

var string = "";
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
var serviceSymbols = [
    ['          ',
     '     ++   ',
     '     ++   ',
     '          ',
     '          ',
     '     ++   ',
     '     ++   ',
     '          '
    ]
];

string = fromArabicToRoman(hours, minutes);
if (string)
{
    console.log("Ваше время:\n\r");
    console.log(string);
}
else
{
    console.log('Ошибка! Неверно введенные данные!\r\n');
}

function fromArabicToRoman(hours, minutes)
{
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);

    /*Проверка на числовое значение.*/
    if (isNaN(hours) || isNaN(minutes))
    {
        console.error("Ошибка! Введено не числовое значение!\r\n");
        return undefined;
    }
    /*Проверка на диапазон значений.*/
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
    {
        console.error("Ошибка! Введены неверные значения!\r\n");
        return undefined;
    }

    /*Перевод времени в римские цифры.*/
    var result = [];
    result.push(integerToRoman(hours));
    result.push([serviceSymbols[0]]);
    result.push(integerToRoman(minutes));

    return makeString(result);
}

function makeString(array)
{
    var string = "";
    var tmp = [];

    /*Сбрасываем все элементы в один массив.*/
    for (var i=0; i<array.length; ++i)
        for (var j=0; j<array[i].length; ++j)
        {
            tmp.push(array[i][j]);
        }
    /*Преобразуем в строку для вывода в консоль.*/
    for (var i=0; i<tmp[0].length; ++i)
    {
        for (var j=0; j<tmp.length; ++j)
        {
            string += tmp[j][i];
        }
        string += "\r\n";
    }

    return string;
}

function integerToRoman(number)
{
    var tmp = [];

    /*Обработка нуля.*/
    if (number == 0)
    {
        tmp.push(romanNumbers[0]);
    }
    /*Обработка остальных значений.*/
    else
    {
        var index = arabicNumbers.length;
        while(index > 0)
        {
            while(number >= arabicNumbers[index])
            {
                number -= arabicNumbers[index];
                tmp.push(romanNumbers[index]);
            }
            --index;
        }
    }

    return tmp;
}
