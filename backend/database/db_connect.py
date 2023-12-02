from tinydb import TinyDB


class Database:
    def __init__(self, db_name:str):
        try:
            if db_name == '':
                raise ValueError
            
            self.conn:TinyDB =  TinyDB(f'database/{db_name}.json')
        except ValueError:
            print("selecione um nome para o banco de dados")
            return None
