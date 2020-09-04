WebP Express 0.17.5. Conversion triggered using bulk conversion, 2020-09-02 23:12:34

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.2.11
- Server software: Apache/2.4.35 (Win64) OpenSSL/1.1.0i PHP/7.2.11

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: D:\sites\bedrock/web/app/uploads/2020/09/yoga-14.png
- destination: D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-14.png.webp
- log-call-arguments: true
- converters: (array of 9 items)

The following options have not been explicitly set, so using the following defaults:
- converter-options: (empty array)
- shuffle: false
- preferred-converters: (empty array)
- extra-converters: (empty array)

The following options were supplied and are passed on to the converters in the stack:
- alpha-quality: 80
- encoding: "auto"
- metadata: "none"
- near-lossless: 60
- quality: 85
------------


*Trying: cwebp* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: D:\sites\bedrock/web/app/uploads/2020/09/yoga-14.png
- destination: D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-14.png.webp
- alpha-quality: 80
- encoding: "auto"
- low-memory: true
- log-call-arguments: true
- metadata: "none"
- method: 6
- near-lossless: 60
- quality: 85
- use-nice: true
- command-line-options: ""
- try-common-system-paths: true
- try-supplied-binary-for-os: true

The following options have not been explicitly set, so using the following defaults:
- auto-filter: false
- default-quality: 85
- max-quality: 85
- preset: "none"
- size-in-percentage: null (not set)
- skip: false
- rel-path-to-precompiled-binaries: *****
- try-cwebp: true
- try-discovering-cwebp: true
------------

Encoding is set to auto - converting to both lossless and lossy and selecting the smallest file

Converting to lossy
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version 2>&1. Result: *Exec failed* (return code: 1)

*Output:* 
'cwebp' n'est pas reconnu en tant que commande interne
ou externe, un programme ex‚cutable ou un fichier de commandes.

Nope a plain cwebp call does not work
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 0 binaries
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 0 binaries
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (WINNT)... We do.
Found 1 binaries: 
- D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe
Detecting versions of the cwebp binaries found
- Executing: D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe -version 2>&1. Result: version: *1.0.3*
Binaries ordered by version number.
- D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe: (version: 1.0.3)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 1.0.3
Quality: 85. 
The near-lossless option ignored for lossy
Trying to convert by executing the following command:
D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe -metadata none -q 85 -alpha_q "80" -m 6 -low_memory "D:\sites\bedrock/web/app/uploads/2020/09/yoga-14.png" -o "D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-14.png.webp.lossy.webp" 2>&1 2>&1

*Output:* 
Saving file 'D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-14.png.webp.lossy.webp'
File:      D:\sites\bedrock/web/app/uploads/2020/09/yoga-14.png
Dimension: 800 x 834 (with alpha)
Output:    25470 bytes Y-U-V-All-PSNR 48.67 51.66 49.13   49.12 dB
           (0.31 bpp)
block count:  intra4:        728  (27.47%)
              intra16:      1922  (72.53%)
              skipped:      1726  (65.13%)
bytes used:  header:            308  (1.2%)
             mode-partition:   3933  (15.4%)
             transparency:     8178 (99.0 dB)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |    5617 |     544 |     110 |      29 |    6300  (24.7%)
 intra16-coeffs:  |     912 |     132 |      75 |      19 |    1138  (4.5%)
  chroma coeffs:  |    5094 |     270 |      85 |     110 |    5559  (21.8%)
    macroblocks:  |      34%|       6%|       2%|      58%|    2650
      quantizer:  |      20 |      17 |      13 |       9 |
   filter level:  |      63 |       4 |       2 |       0 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |   11623 |     946 |     270 |     158 |   12997  (51.0%)
Lossless-alpha compressed size: 8177 bytes
  * Header size: 58 bytes, image data size: 8119
  * Precision Bits: histogram=5 transform=4 cache=0
  * Palette size:   20

Success
Reduction: -15% (went from 22 kb to 25 kb)

Converting to lossless
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version 2>&1. Result: *Exec failed* (return code: 1)

*Output:* 
'cwebp' n'est pas reconnu en tant que commande interne
ou externe, un programme ex‚cutable ou un fichier de commandes.

Nope a plain cwebp call does not work
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 0 binaries
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 0 binaries
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (WINNT)... We do.
Found 1 binaries: 
- D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe
Detecting versions of the cwebp binaries found
- Executing: D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe -version 2>&1. Result: version: *1.0.3*
Binaries ordered by version number.
- D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe: (version: 1.0.3)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 1.0.3
Trying to convert by executing the following command:
D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe -metadata none -q 85 -alpha_q "80" -near_lossless 60 -m 6 -low_memory "D:\sites\bedrock/web/app/uploads/2020/09/yoga-14.png" -o "D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-14.png.webp.lossless.webp" 2>&1 2>&1

*Output:* 
Saving file 'D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-14.png.webp.lossless.webp'
File:      D:\sites\bedrock/web/app/uploads/2020/09/yoga-14.png
Dimension: 800 x 834
Output:    18870 bytes (0.23 bpp)
Lossless-ARGB compressed size: 18870 bytes
  * Header size: 297 bytes, image data size: 18547
  * Lossless features used: PALETTE
  * Precision Bits: histogram=5 transform=4 cache=1
  * Palette size:   64

Success
Reduction: 15% (went from 22 kb to 18 kb)

Picking lossless
cwebp succeeded :)

Converted image in 875 ms, reducing file size with 15% (went from 22 kb to 18 kb)
