import json

with open('index.json') as file:
	text = file.read()
	os = json.loads(text)
	
	for o in os:
		o['type'] = o['type'].strip()
		o['word'] = o['word'].strip()
		o['key'] = o['word'].lower()

	os = sorted(os, key=lambda o: o['key'])

	text = json.dumps(os)

	with open('index2.json', 'w') as file2:
		file2.write(text)


with open('content.json') as file:
	text = file.read()
	os = json.loads(text)

	mapWord = {}
	count = 0
	for o in os:
		o['word'] = o['word'].strip()
		o['content'] = o['content'].strip()
		o['type'] = o['type'].strip()

		key = o['word'] + '--' + o['type']
		if key in mapWord:
			print('-----------------')
			print(key)
			print(o['content'])
			print('-')
			print(mapWord[key]['content'])
			count += 1
		else:
			mapWord[key] = o

	text = json.dumps(os)

	print("count", count)
	with open('content2.json', 'w') as file2:
		file2.write(text)