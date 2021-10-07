import json


class Exporter:

    def __init__(self):
        pass

    def save_tasks(self, tasks):
        # TODO zapisz taski do pliku tutaj
        f = open('taski.json', 'w')
        json.dump(tasks, f)
        f.close()
