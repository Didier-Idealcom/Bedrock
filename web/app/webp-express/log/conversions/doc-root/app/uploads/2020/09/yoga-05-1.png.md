WebP Express 0.17.5. Conversion triggered using bulk conversion, 2020-09-02 23:12:33

*WebP Convert 2.3.2*  ignited.
- PHP version: 7.2.11
- Server software: Apache/2.4.35 (Win64) OpenSSL/1.1.0i PHP/7.2.11

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: D:\sites\bedrock/web/app/uploads/2020/09/yoga-05-1.png
- destination: D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-05-1.png.webp
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
- source: D:\sites\bedrock/web/app/uploads/2020/09/yoga-05-1.png
- destination: D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-05-1.png.webp
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
D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe -metadata none -q 85 -alpha_q "80" -m 6 -low_memory "D:\sites\bedrock/web/app/uploads/2020/09/yoga-05-1.png" -o "D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-05-1.png.webp.lossy.webp" 2>&1 2>&1

*Output:* 
Saving file 'D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-05-1.png.webp.lossy.webp'
File:      D:\sites\bedrock/web/app/uploads/2020/09/yoga-05-1.png
Dimension: 81 x 81 (with alpha)
Output:    2210 bytes Y-U-V-All-PSNR 44.40 41.46 40.55   42.94 dB
           (2.69 bpp)
block count:  intra4:         21  (58.33%)
              intra16:        15  (41.67%)
              skipped:        11  (30.56%)
bytes used:  header:            134  (6.1%)
             mode-partition:    120  (5.4%)
             transparency:      331 (99.0 dB)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |     858 |       0 |       0 |       0 |     858  (38.8%)
 intra16-coeffs:  |      11 |       0 |       0 |       0 |      11  (0.5%)
  chroma coeffs:  |     698 |       0 |       0 |       0 |     698  (31.6%)
    macroblocks:  |      86%|       0%|       0%|      14%|      36
      quantizer:  |      15 |      11 |       8 |       8 |
   filter level:  |       4 |       2 |       2 |       0 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |    1567 |       0 |       0 |       0 |    1567  (70.9%)
Lossless-alpha compressed size: 330 bytes
  * Header size: 53 bytes, image data size: 277
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=0
  * Palette size:   6

Success
Reduction: -126% (went from 979 bytes to 2210 bytes)

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
D:\sites\bedrock\web\app\mu-plugins\webp-express\vendor\rosell-dk\webp-convert\src\Convert\Converters\Binaries\cwebp-103-windows-x64.exe -metadata none -q 85 -alpha_q "80" -near_lossless 60 -m 6 -low_memory "D:\sites\bedrock/web/app/uploads/2020/09/yoga-05-1.png" -o "D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-05-1.png.webp.lossless.webp" 2>&1 2>&1

*Output:* 
Saving file 'D:\sites\bedrock/web/app/webp-express/webp-images/doc-root/app\uploads\2020\09\yoga-05-1.png.webp.lossless.webp'
File:      D:\sites\bedrock/web/app/uploads/2020/09/yoga-05-1.png
Dimension: 81 x 81
Output:    1042 bytes (1.27 bpp)
Lossless-ARGB compressed size: 1042 bytes
  * Header size: 159 bytes, image data size: 858
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=0
  * Palette size:   16

Success
Reduction: -6% (went from 979 bytes to 1042 bytes)

Picking lossless
cwebp succeeded :)

Converted image in 666 ms, reducing file size with -6% (went from 979 bytes to 1042 bytes)
