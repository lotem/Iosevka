// glyphName => unicode
const latin = {};
for (let ch of 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz') {
  latin[ch] = ch;
}

// glyphName => unicode
const remap = {
  'cyrA' : 'A',
  'cyrBe' : 'B',
  //'cyrTse' : 'C',
  //'cyrKaacute' : 'C',
  'cyrChe' : 'C',
  'cyrDe' : 'D',
  'cyrIe' : 'E',
  'cyrEf' : 'F',
  'cyrGhe' : 'G',
  'cyrHa' : 'H',
  'cyrI' : 'I',
  'cyrZhe' : 'J',
  'cyrKa' : 'K',
  'cyrEl' : 'L',
  'cyrEm' : 'M',
  'cyrEn' : 'N',
  'cyrO' : 'O',
  'cyrPe' : 'P',
  //'cyrChe' : 'Q',
  'cyrKaacute' : 'Q',
  'cyrEr' : 'R',
  'cyrEs' : 'S',
  'cyrTe' : 'T',
  'cyrU' : 'U',
  'cyrVe' : 'V',
  'cyrUbreve' : 'W',
  'cyrSha' : 'X',
  'cyrIbreve' : 'Y',
  'cyrZe' : 'Z',
  'cyra' : 'a',
  'cyrbe' : 'b',
  //'cyrtse.italic' : 'c',
  //'cyrkaacute' : 'c',
  'cyrche' : 'c',
  'cyrde.italic' : 'd',
  'cyrie' : 'e',
  'cyref' : 'f',
  'cyrghe.italic' : 'g',
  'cyrha' : 'h',
  'cyri.italic' : 'i',
  'cyrzhe' : 'j',
  'cyrka' : 'k',
  'cyrel' : 'l',
  'cyrem' : 'm',
  'cyren' : 'n',
  'cyro' : 'o',
  'cyrpe.italic' : 'p',
  //'cyrche' : 'q',
  'cyrkaacute' : 'q',
  'cyrer' : 'r',
  'cyres' : 's',
  'cyrte.italic' : 't',
  'cyru' : 'u',
  'cyrve.italic' : 'v',
  'cyrubreve' : 'w',
  'cyrsha.italic' : 'x',
  'ubreve' : 'y',
  'cyrze' : 'z',
};

module.exports = function remapLatin(glyph) {
  //console.log('glyph:', glyph.name, glyph.unicode);
  if (glyph.name in latin) {
    let target = latin[glyph.name];
    if (glyph.unicode[0] == target.charCodeAt(0)) {
      console.log('remove mapping', glyph.name, ' => ', target);
      glyph.unicode.shift();
    }
  }
  if (glyph.name in remap) {
    let target = remap[glyph.name];
    console.log('add mapping', glyph.name, ' => ', target);
    glyph.unicode.unshift(target.charCodeAt(0));
  }
}
