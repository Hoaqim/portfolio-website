import json


class Importer:

    def __init__(self):
        pass

    def read_tasks(self):
        # TODO odczytaj plik i zdekoduj treść tutaj
        f = open('taski.json', 'r')
        self.data=json.load(f)
        f.close()


    def get_tasks(self):
        # TODO zwróć zdekodowane taski tutaj
        return self.data