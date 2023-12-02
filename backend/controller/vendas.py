from database.manager import Manager

class Venda(Manager):
    def __init__(self, db_name: str):
        super().__init__(db_name)
        
    def model(self):
        """
            {
                "valor": "float: 0 > 99999.99 | NN",
                "data": "date: %d/%m/%Y | NN",
                "funcionario": "str: registro | NN",
                "setor": "str: 3 > 50 | NN",
            }
        """
        model_to_match = {
            "valor": float,
            "data": str,
            "funcionario": str,
            "setor": str,
        }
        
        return model_to_match
        
    def insert(self, data: dict):
        super().insert('venda', data)
    
    def update(self, data: dict, query):
        super().update('venda', data, query)
    
    def delete(self, query):
        super().delete('venda', query)
    
    def search(self, query):
        return super().search('venda', query)
    
    def get_all(self):
        return super().get_all('venda')
    
    def drop_table(self):
        super().drop_table('venda')
    
    def __del__(self):
        super().__del__()
    
    def __repr__(self):
        return f"Venda({self.conn})"
    
    def __str__(self):
        return f"Venda({self.conn})"
    
    def __bool__(self):
        return True if self.conn else False
    
    def __len__(self):
        return len(self.conn)