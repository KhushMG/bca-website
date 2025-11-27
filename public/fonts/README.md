# Neue Regrade Font Files

This directory should contain the Neue Regrade font files for the BCA website.

## Required Files

Add the following Neue Regrade font files to this directory:

- `NeueRegrade-Regular.woff2` (weight: 400)
- `NeueRegrade-SemiBold.woff2` (weight: 600)
- `NeueRegrade-Bold.woff2` (weight: 700)

## Where to Get Neue Regrade

Neue Regrade is a commercial font. You can obtain it from:
- [Pangram Pangram](https://pangrampangram.com/) - Original foundry
- Or your organization's font license

## File Format

- **Preferred format**: WOFF2 (best compression and browser support)
- Alternative: WOFF or TTF (but WOFF2 is recommended)

## Converting Fonts

If you have TTF/OTF files, you can convert them to WOFF2 using:
- Online: https://cloudconvert.com/ttf-to-woff2
- Command line: `woff2_compress font.ttf`

## Current Fallback

Until you add the Neue Regrade font files, the website will use the system font stack:
- System UI fonts
- Arial
- Sans-serif

The site is fully configured and will automatically use Neue Regrade once you add the font files to this directory.

