# Flashcard-Generator
Week 11 Homework

Please call the main.js as indicated in the examples

3rd word of the command should be basic or cloze

4th word of the command should new or nonew to demo that the object can be instantiated with new or without new keyword.

in case of basic ...5th word should be front text and 6th word should be back text

in case of cloze....5th word should be complete text and 6th word should be the cloze text

PLEASE SEE BELOW EXAMPLES

244275@WKSWUMTV5080 MINGW64 ~/desktop/code/flashcard-generator (master)
$ node main.js basic new "What is the Most Stylish instrument" Guitar

Console Logging the object

BasicCard { front: 'What is the Most Stylish instrument', back: 'Guitar' }

Console Logging the object's properties

front is : What is the Most Stylish instrument
back is : Guitar




244275@WKSWUMTV5080 MINGW64 ~/desktop/code/flashcard-generator (master)
$ node main.js basic nonew "What is the sweetest instrument" Saxophone

Console Logging the object

BasicCard { front: 'What is the sweetest instrument', back: 'Saxophone' }

Console Logging the object's properties

front is : What is the sweetest instrument
back is : Saxophone




244275@WKSWUMTV5080 MINGW64 ~/desktop/code/flashcard-generator (master)
$ node main.js cloze new "Veena is the most soulful rich royal sounding indian instrument" Veena

Console Logging the object

ClozeCard {
  fulltext: 'Veena is the most soulful rich royal sounding indian instrument',
  cloze: 'Veena',
  partial: '...  is the most soulful rich royal sounding indian instrument' }

Console Logging the object's properties

partial text is : ...  is the most soulful rich royal sounding indian instrument
cloze text is : Veena
full text is : Veena is the most soulful rich royal sounding indian instrument




244275@WKSWUMTV5080 MINGW64 ~/desktop/code/flashcard-generator (master)
$ node main.js cloze nonew "Sitar is the most serene blissful sounding indian instrument" Sitar

Console Logging the object

ClozeCard {
  fulltext: 'Sitar is the most serene blissful sounding indian instrument',
  cloze: 'Sitar',
  partial: '...  is the most serene blissful sounding indian instrument' }

Console Logging the object's properties

partial text is : ...  is the most serene blissful sounding indian instrument
cloze text is : Sitar
full text is : Sitar is the most serene blissful sounding indian instrument

244275@WKSWUMTV5080 MINGW64 ~/desktop/code/flashcard-generator (master)
$

