from database.manager import Manager

class Suporte(Manager):
    def __init__(self, db_name: str):
        super().__init__(db_name)
    
    def insert(self, data: dict):
        super().insert('suporte', data)
    
    def update(self, data: dict, query):
        super().update('suporte', data, query)
    
    def delete(self, query):
        super().delete('suporte', query)
    
    def search(self, query):
        return super().search('suporte', query)
    
    def get_all(self):
        return super().get_all('suporte')
    
    def drop_table(self):
        super().drop_table('suporte')
    
    def __del__(self):
        super().__del__()
    
    def __repr__(self):
        return f"Suporte({self.conn})"
    
    def __str__(self):
        return f"Suporte({self.conn})"
    
    def __bool__(self):
        return True if self.conn else False
    
    def __len__(self):
        return len(self.conn)