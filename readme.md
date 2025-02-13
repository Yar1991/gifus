# Gifus

A simple CLI tool for downloading GIFs

```
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠟⠉⠉⠉⠀⠀⣀⡠⠤⠒⠒⠒⠒⠒⠚⠻⠭⠭⠭⢉⣉⠛⠛⠿⠿⠷⠶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣼⡟⠁⠀⠀⠀⡠⠖⣉⡥⠔⢂⣈⣉⣉⣀⡉⠉⠉⠑⠒⠒⠒⠒⠒⠒⠒⠒⠊⠁⠂⠈⠙⠻⣦⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⠀⠔⢉⠤⣊⠵⠒⠉⠁⠀⠀⠀⠀⠙⢆⠀⠀⠀⠀⠀⠐⡚⠉⠉⠉⠉⠒⢤⡀⠀⠀⠈⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣼⠟⠀⠀⠀⠀⠐⠁⠐⠁⣀⣤⣤⣤⣤⣤⣤⣄⡀⠈⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠱⠀⠀⠀⠘⣷⡀⠀⠀⠀
⠀⠀⢀⣴⣾⣯⣤⣤⡀⠀⠀⣤⡤⢠⣾⣿⣿⣿⣿⣿⣧⣈⠉⠻⣶⡄⠀⠀⢀⣀⣨⣴⣶⣿⣿⣿⣿⣦⠀⠤⠤⣀⣀⡙⢿⣦⡀⠀
⠀⣴⠟⡽⠉⢀⣤⠶⠶⡶⣶⣤⣈⠉⠉⠁⢀⣠⡶⠀⠉⠙⠻⢿⠟⠁⠀⠀⠘⠛⣿⡟⠋⠉⠉⠉⠁⠀⠀⠀⣀⣀⠳⢍⠢⡻⣷⡀
⣸⡏⢰⠁⣰⡟⠁⠀⣰⣧⡈⠉⠛⠛⠛⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣧⡀⠀⠀⢰⣦⣴⡾⠛⡝⠛⠓⠀⡆⢣⣿⡇
⢿⡇⠘⡀⢿⡇⣤⣾⣿⡛⠛⠷⣦⣤⣀⡀⠀⠠⠀⠀⠤⢷⡾⠟⠛⢀⠀⠀⠀⠀⠀⠙⣿⣦⣀⠀⠀⠀⠀⢸⣷⠀⠀⡰⠃⣼⡿⠀
⠘⣷⡄⢧⡈⠻⠀⠀⢹⣷⣄⠀⠀⢹⣿⠿⠷⣶⣤⣀⡀⠈⢿⡄⠛⠛⠛⠃⠀⣀⢀⣴⠟⠙⠃⠙⠒⠄⣠⣾⣿⣧⠠⠖⢫⡿⠃⠀
⠀⠈⠻⣦⣍⠀⠀⠀⠀⠹⣿⡟⠷⣾⣿⣦⣀⠀⠈⠉⢹⡿⠷⠶⣶⣤⣤⣤⣀⣹⣟⣁⣀⣤⣤⣴⡶⠿⣿⠙⣿⣿⠀⠀⣿⠁⠀⠀
⠀⠀⠀⠈⢿⣦⠀⠀⠀⠀⠘⢿⣄⢘⣿⠻⠿⣿⣶⣦⣾⣇⣀⠀⠀⠀⢹⡏⠉⠉⠙⣿⠉⠉⠁⣹⣇⢀⣿⣧⣿⣿⠀⢸⡏⠀⠀⠀
⠀⠀⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀⠻⣿⣏⠀⠀⠀⠉⢙⣿⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⢸⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢻⣦⡀⠀⠀⠀⠀⠈⠛⢿⣦⣄⢀⣼⠇⠀⠀⠀⠈⢹⡟⠛⠛⠛⢿⣿⠿⠻⣿⠿⢿⣿⢻⣿⣿⠇⠀⠘⣇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⠿⣦⣐⠢⣄⡒⠢⢄⡈⠙⠿⣿⣦⣤⣀⣀⠀⣸⡇⠀⠀⠀⣿⠃⠀⣼⡟⣀⣿⣧⣽⣿⠏⠀⠀⠀⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠷⣦⣍⡓⠢⢬⣑⠢⢤⣈⠉⠉⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠉⠉⠁⡠⠀⢀⡀⠀⢿⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣦⣌⡉⠓⠪⠽⢶⣦⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠴⠚⠁⠀⡰⠁⠀⢸⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣦⣄⡀⠀⠀⠉⠉⠒⠒⠒⠠⠄⠀⠀⠠⠤⠤⠤⠒⠒⠉⠀⠀⠀⣼⠇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⠶⣶⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡾⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠳⠶⠶⠶⠶⠶⠶⠶⠿⠛⠉⠀⠀⠀⠀⠀

1. Request GIFs
2. Change the number of GIFs to download (current: 1)
3. Change the rating (current: g)
4. Change the search offset (current: 0)
5. Exit
```

By default, GIFs will be downloaded to the `~/Download` folder

To install, run `npm install -g gifus` and then `gifus` to open it

### Before using, make sure to create a free API key on <https://developers.giphy.com/> and add it to your environment vartiables, e.g. `export API_KEY=ASFK7786676878HJJ`
