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

To install, run `npm install -g gifus` and enjoy...

### Make sure to create a free API key on <https://developers.giphy.com/> and add it to your `.env` file
