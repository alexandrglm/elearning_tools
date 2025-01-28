Depending on the video mode are being used:
*  Colours encoding change.  
*  Coordinates on-screen differs.  
*  Pixels-per-block aren't the same.

*Although **practicing** is the best way to understand/memorize/get ready to self-manipulate data, the lack of time (and the headache derivated from trying to get deeper on knowledge) needs to be resolved not only by takning notes, but creating guides and types.  
So, let's note some tips: 

## VIDEO MODE 1  
* 4 Colours:  

  
* 4 pixels-per-block, horizontals.
  
* `D000` ~ `FFFF` video memory address available.  
  
* Screen Border can be defined using BASIC (`border + the colour num. available at HW Colour tables), to avoid mistaken countings.  

### Colour Byte codification  
Even it's already explained in this `Module_1/B_Theory`, this is the simplest way.  

1. `1 BYTE` = `1 BLOCK` of `4 PIXELS/COLOURS` = `2 BITS per COLOUR`.  
2. Bits allocating uses `PAIR BLOCKS NOTATION` plus `RIGHT-TO-THE-LEFT ALLOCATION`.  
3. Fast mental conversion must be needed at the begining but, in fact, there are always the same values to use, so they are automatically memorised on trainging-practicng.  

#### Colour conversions are made like this:  

1st.  Make sure you know well the binary digits of each colour (It's easy in video mode 1 as long as only uses 4 of them):    

  - `00` - Transparent(Blue)  
  - `01` - Yellow  
  - `10` - Cyan  
  - `11` - Red  
  
2nd.  Choose which 4 colours you will need to fill the block in use, and put them and its bin equivalence on two mental rows.  Then, treat the bin row as two blocks of 4 bits each ones.  
  
3rd.  Re-order the bin row by filling it in a new row of two blocks by adding the bits BY PAIRS and RIGHT-TO-THE LEFT.  
  
4th.  Finally, refactorize each block to Base16 in their own digit, resulting the original bin byte converted to 2-digits Hexadecimal value.  
  
E.g.:  
    *  **R - R - Y - C**  
       `11`-`11`-`01`-`10` 
       `1111` - `0110`  
Now, reorder it BYPAIR/RightToLeft:  
    * *11 at the begining? So, ...*  
         **1       1**  
      *11 at the second? So, ...*  
         **11      11**  
      *01 on 3rd position? So, ...*  
         **111     110**  
      *10 the fourth? So, ...*  
         **1110    1101**  
    * *The final Base16 conversion on each block ...*  
              **E D**  
         
### Coordinates On-Screen

1. It works by the video memory addresses available:
  * `C000` is the first address.
  * Then, you put something on this. Remember, it's an horizontal 4 Pixels-per-block.
  * The next, obvius, address is 'C001'. Once again, remember it does not follow the first by one pixels, by one BLOCK-OF-4-PIXELS instead.

2. The video rastering starts, widthly, on the TOP-LEFT.
   
3.Using video mode 1, the max. width, in mem. addresses, are:
  * C000 to C7FF = 2047 mem. addresses.
  * Next line starts on `C800` to `CFFF`.
  * There's not available a direct 1:1 conversion between addreses and pixels coordinates, and/or blocks.



***
# Better explained

### **Color Conversion in Mode 1 (Amstrad CPC)**  

#### **Steps to Convert Colors in Pixel Blocks**  

1. **Understand the binary encoding of each color:**  
   -  `00` - **Transparent (Blue)**  
   -  `01` - **Yellow**  
   - `10` - **Cyan**  
   - `11` - **Red**

2. **Choose the 4 colors you need to fill a pixel block** and align them in two mental rows:  
   - The top row is the color order (e.g., **R - R - Y - C**).
   - The bottom row is the binary equivalent: `11` - `11` - `01` - `10`.

3. **Reorder the binary row in pairs, from right to left**, into two 4-bit blocks:  
   - Start with the first two bits and continue shifting pairs.  
     For example:  
     - First pair (`11`): **1       1**  
     - Second pair (`11`): **11      11**  
     - Third pair (`01`): **111     110**  
     - Fourth pair (`10`): **1110    1101**

4. **Convert each 4-bit block to Base 16 (Hexadecimal):**  
   - Using the reordered binary, calculate each block:  
     - `1110` → `E`  
     - `1101` → `D`  
   - The final Hexadecimal value for this block is **ED**.


***
## Full list of values.

| Tile| Hex |
|-------------|-------------|
| BBBB        | 00          |
| BBBY        | 01          |
| BBBC        | 02          |
| BBBR        | 03          |
| BBYB        | 04          |
| BBYY        | 05          |
| BBYC        | 06          |
| BBYR        | 07          |
| BBCB        | 08          |
| BBCY        | 09          |
| BBCC        | 0A          |
| BBCR        | 0B          |
| BBRB        | 0C          |
| BBRY        | 0D          |
| BBRC        | 0E          |
| BBRR        | 0F          |
| BYBB        | 10          |
| BYBY        | 11          |
| BYBC        | 12          |
| BYBR        | 13          |
| BYYB        | 14          |
| BYYY        | 15          |
| BYYC        | 16          |
| BYYR        | 17          |
| BYCB        | 18          |
| BYCY        | 19          |
| BYCC        | 1A          |
| BYCR        | 1B          |
| BYRB        | 1C          |
| BYRY        | 1D          |
| BYRC        | 1E          |
| BYRR        | 1F          |
| BCBB        | 20          |
| BCBY        | 21          |
| BCBC        | 22          |
| BCBR        | 23          |
| BCYB        | 24          |
| BCYY        | 25          |
| BCYC        | 26          |
| BCYR        | 27          |
| BCCB        | 28          |
| BCCY        | 29          |
| BCCC        | 2A          |
| BCCR        | 2B          |
| BCRB        | 2C          |
| BCRY        | 2D          |
| BCRC        | 2E          |
| BCRR        | 2F          |
| BRBB        | 30          |
| BRBY        | 31          |
| BRBC        | 32          |
| BRBR        | 33          |
| BRYB        | 34          |
| BRYY        | 35          |
| BRYC        | 36          |
| BRYR        | 37          |
| BRCB        | 38          |
| BRCY        | 39          |
| BRCC        | 3A          |
| BRCR        | 3B          |
| BRRB        | 3C          |
| BRRY        | 3D          |
| BRRC        | 3E          |
| BRRR        | 3F          |
| YBBB        | 40          |
| YBBY        | 41          |
| YBBC        | 42          |
| YBBR        | 43          |
| YBYB        | 44          |
| YBYY        | 45          |
| YBYC        | 46          |
| YBYR        | 47          |
| YBCB        | 48          |
| YBCY        | 49          |
| YBCC        | 4A          |
| YBCR        | 4B          |
| YBRB        | 4C          |
| YBRY        | 4D          |
| YBRC        | 4E          |
| YBRR        | 4F          |
| YYBB        | 50          |
| YYBY        | 51          |
| YYBC        | 52          |
| YYBR        | 53          |
| YYYB        | 54          |
| YYYY        | 55          |
| YYYC        | 56          |
| YYYR        | 57          |
| YYCB        | 58          |
| YYCY        | 59          |
| YYCC        | 5A          |
| YYCR        | 5B          |
| YYRB        | 5C          |
| YYRY        | 5D          |
| YYRC        | 5E          |
| YYRR        | 5F          |
| YCBB        | 60          |
| YCBY        | 61          |
| YCBC        | 62          |
| YCBR        | 63          |
| YCYB        | 64          |
| YCYY        | 65          |
| YCYC        | 66          |
| YCYR        | 67          |
| YCCB        | 68          |
| YCCY        | 69          |
| YCCC        | 6A          |
| YCCR        | 6B          |
| YCRB        | 6C          |
| YCRY        | 6D          |
| YCRC        | 6E          |
| YCRR        | 6F          |
| YRBB        | 70          |
| YRBY        | 71          |
| YRBC        | 72          |
| YRBR        | 73          |
| YRYB        | 74          |
| YRYY        | 75          |
| YRYC        | 76          |
| YRYR        | 77          |
| YRCB        | 78          |
| YRCY        | 79          |
| YRCC        | 7A          |
| YRCR        | 7B          |
| YRRB        | 7C          |
| YRRY        | 7D          |
| YRRC        | 7E          |
| YRRR        | 7F          |
| CBBB        | 80          |
| CBBY        | 81          |
| CBBC        | 82          |
| CBBR        | 83          |
| CBYB        | 84          |
| CBYY        | 85          |
| CBYC        | 86          |
| CBYR        | 87          |
| CBCB        | 88          |
| CBCY        | 89          |
| CBCC        | 8A          |
| CBCR        | 8B          |
| CBRB        | 8C          |
| CBRY        | 8D          |
| CBRC        | 8E          |
| CBRR        | 8F          |
| CYBB        | 90          |
| CYBY        | 91          |
| CYBC        | 92          |
| CYBR        | 93          |
| CYYB        | 94          |
| CYYY        | 95          |
| CYYC        | 96          |
| CYYR        | 97          |
| CYCB        | 98          |
| CYCY        | 99          |
| CYCC        | 9A          |
| CYCR        | 9B          |
| CYRB        | 9C          |
| CYRY        | 9D          |
| CYRC        | 9E          |
| CYRR        | 9F          |
| CCBB        | A0          |
| CCBY        | A1          |
| CCBC        | A2          |
| CCBR        | A3          |
| CCYB        | A4          |
| CCYY        | A5          |
| CCYC        | A6          |
| CCYR        | A7          |
| CCCB        | A8          |
| CCCY        | A9          |
| CCCC        | AA          |
| CCCR        | AB          |
| CCRB        | AC          |
| CCRY        | AD          |
| CCRC        | AE          |
| CCRR        | AF          |
| CRBB        | B0          |
| CRBY        | B1          |
| CRBC        | B2          |
| CRBR        | B3          |
| CRYB        | B4          |
| CRYY        | B5          |
| CRYC        | B6          |
| CRYR        | B7          |
| CRCB        | B8          |
| CRCY        | B9          |
| CRCC        | BA          |
| CRCR        | BB          |
| CRRB        | BC          |
| CRRY        | BD          |
| CRRC        | BE          |
| CRRR        | BF          |
| RBBB        | C0          |
| RBBY        | C1          |
| RBBC        | C2          |
| RBBR        | C3          |
| RBYB        | C4          |
| RBYY        | C5          |
| RBYC        | C6          |
| RBYR        | C7          |
| RBCB        | C8          |
| RBCY        | C9          |
| RBCC        | CA          |
| RBCR        | CB          |
| RBRB        | CC          |
| RBRY        | CD          |
| RBRC        | CE          |
| RBRR        | CF          |
| RYBB        | D0          |
| RYBY        | D1          |
| RYBC        | D2          |
| RYBR        | D3          |
| RYYB        | D4          |
| RYYY        | D5          |
| RYYC        | D6          |
| RYYR        | D7          |
| RYCB        | D8          |
| RYCY        | D9          |
| RYCC        | DA          |
| RYCR        | DB          |
| RYRB        | DC          |
| RYRY        | DD          |
| RYRC        | DE          |
| RYRR        | DF          |
| RCBB        | E0          |
| RCBY        | E1          |
| RCBC        | E2          |
| RCBR        | E3          |
| RCYB        | E4          |
| RCYY        | E5          |
| RCYC        | E6          |
| RCYR        | E7          |
| RCCB        | E8          |
| RCCY        | E9          |
| RCCC        | EA          |
| RCCR        | EB          |
| RCRB        | EC          |
| RCRY        | ED          |
| RCRC        | EE          |
| RCRR        | EF          |
| RRBB        | F0          |
| RRBY        | F1          |
| RRBC        | F2          |
| RRBR        | F3          |
| RRYB        | F4          |
| RRYY        | F5          |
| RRYC        | F6          |
| RRYR        | F7          |
| RRCB        | F8          |
| RRCY        | F9          |
| RRCC        | FA          |
| RRCR        | FB          |
| RRRB        | FC          |
| RRRY        | FD          |
| RRRC        | FE          |
| RRRR        | FF          |
