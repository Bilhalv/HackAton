from database.db_connect import Database



class Manager(Database):
    def __init__(self, db_name: str):
        super().__init__(db_name)
    
    def insert(self, table_name: str, data: dict):
        table = self.conn.table(table_name)
        table.insert(data)
    
    def update(self, table_name: str, data: dict, query):
        table = self.conn.table(table_name)
        table.update(data, query)
    
    def delete(self, table_name: str, query):
        table = self.conn.table(table_name)
        table.remove(query)
    
    def search(self, table_name: str, query):
        table = self.conn.table(table_name)
        return table.search(query)
    
    def get_all(self, table_name: str):
        table = self.conn.table(table_name)
        return table.all()
    
    def drop_table(self, table_name: str):
        self.conn.drop_table(table_name)
    
    def __del__(self):
        self.conn.close()
    
    def __repr__(self):
        return f"Manager({self.conn})"
    
    def __str__(self):
        return f"Manager({self.conn})"
    
    def __bool__(self):
        return True if self.conn else False
    
    def __len__(self):
        return len(self.conn)