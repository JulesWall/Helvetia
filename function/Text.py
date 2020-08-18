import json

class Text:

    def __init__(self, lang, key):
        self.lang = lang
        self.key = key
    
    def get(self):
        with open(f'lang/{self.lang}.json') as f:
            data = json.load(f)
        try: 
            return data.get(self.key)
        except:
            return 'undefined'  