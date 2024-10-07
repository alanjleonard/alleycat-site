go:
	live-server public --port=8123 -q &
	sass --watch -q sass/source.scss:public/styles/css/styles.css &
	pug -w ./pug -o ./public -P &
	espeak "h t t p server commencing operation... NOW!"
