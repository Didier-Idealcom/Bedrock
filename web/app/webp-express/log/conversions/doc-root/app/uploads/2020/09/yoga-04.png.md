WebP Express 0.17.5. Conversion triggered using bulk conversion, 2020-09-02 23:12:32

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.2.11
- Server software: Apache/2.4.35 (Win64) OpenSSL/1.1.0i PHP/7.2.11

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: D:\sites\bedrock/web/app/uploads/2020/09/yoga-04.png
- destination: D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-04.png.webp
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
- source: D:\sites\bedrock/web/app/uploads/2020/09/yoga-04.png
- destination: D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-04.png.webp
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
D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe -metadata none -q 85 -alpha_q "80" -m 6 -low_memory "D:\sites\bedrock/web/app/uploads/2020/09/yoga-04.png" -o "D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-04.png.webp.lossy.webp" 2>&1 2>&1

*Output:* 
Saving file 'D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-04.png.webp.lossy.webp'
File:      D:\sites\bedrock/web/app/uploads/2020/09/yoga-04.png
Dimension: 81 x 81 (with alpha)
Output:    2016 bytes Y-U-V-All-PSNR 45.36 41.62 41.72   43.76 dB
           (2.46 bpp)
block count:  intra4:         18  (50.00%)
              intra16:        18  (50.00%)
              skipped:        13  (36.11%)
bytes used:  header:            108  (5.4%)
             mode-partition:    112  (5.6%)
             transparency:      577 (99.0 dB)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |     568 |       0 |       0 |       0 |     568  (28.2%)
 intra16-coeffs:  |      43 |       0 |       0 |       0 |      43  (2.1%)
  chroma coeffs:  |     550 |       0 |       0 |       0 |     550  (27.3%)
    macroblocks:  |      86%|       0%|       0%|      14%|      36
      quantizer:  |      15 |      11 |       8 |       8 |
   filter level:  |       4 |       2 |       2 |       0 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |    1161 |       0 |       0 |       0 |    1161  (57.6%)
Lossless-alpha compressed size: 576 bytes
  * Header size: 59 bytes, image data size: 517
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=0
  * Palette size:   9

Success
Reduction: -130% (went from 877 bytes to 2016 bytes)

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
D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe -metadata none -q 85 -alpha_q "80" -near_lossless 60 -m 6 -low_memory "D:\sites\bedrock/web/app/uploads/2020/09/yoga-04.png" -o "D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-04.png.webp.lossless.webp" 2>&1 2>&1

*Output:* 
Saving file 'D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-04.png.webp.lossless.webp'
File:      D:\sites\bedrock/web/app/uploads/2020/09/yoga-04.png
Dimension: 81 x 81
Output:    934 bytes (1.14 bpp)
Lossless-ARGB compressed size: 934 bytes
  * Header size: 163 bytes, image data size: 745
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=0
  * Palette size:   16

Success
Reduction: -6% (went from 877 bytes to 934 bytes)

Picking lossless
cwebp succeeded :)

Converted image in 664 ms, reducing file size with -6% (went from 877 bytes to 934 bytes)
