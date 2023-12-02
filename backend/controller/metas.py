from database.manager import Manager

class Metas(Manager):
    def __init__(self, db_name: str):
        super().__init__(db_name)
        
    def model(self):
        """
            {
                "tipo": "str: <- tipos | NN",
                "valor": "float: 0 > 99999.99 | NN",
                "setor": "list[str: <- setores] | NN",
                "prazo": "int: 0 > 45 |N",
                "recompensa": "int 0 > 99999.99 | NN",
                "cargo": "str: <- cargos | NN",
            }
        """
        model_to_match = {
            "tipo": str,
            "valor": float,
            "setor": list,
            "prazo": int,
            "recompensa": int,
            "cargo": str,
        }
        
        return model_to_match
    
    def insert(self, data: dict):
        super().insert('metas', data)
    
    def update(self, data: dict, query):
        super().update('metas', data, query)
    
    def delete(self, query):
        super().delete('metas', query)
    
    def search(self, query):
        return super().search('metas', query)
    
    def get_all(self):
        return super().get_all('metas')
    
    def drop_table(self):
        super().drop_table('metas')
    
    def __del__(self):
        super().__del__()
    
    def __repr__(self):
        return f"Metas({self.conn})"
    
    def __str__(self):
        return f"Metas({self.conn})"
    
    def __bool__(self):
        return True if self.conn else False
    
    def __len__(self):
        return len(self.conn)