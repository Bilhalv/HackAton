from database.manager import Manager
from controller.vendas import Venda

class Funcionario(Manager):
    def __init__(self, db_name: str):
        super().__init__(db_name)
    
    def model(self):
        """
        {
            "registro": "str: 6 > 11 | NN",
            "nome": "str: 3 > 50 | NN",
            "senha": "str: 6 > 20 | NN",
            "foto": "str: link",
            "setor": "str: <- setores | NN",
            "cargo": "str: <- cargos | NN",
            "gerencia": "bool: default False| NN",
            "salario": "float: 0 > 99999.99| NN",
            "data_admissao": "date: %d/%m/%Y",
        }
        """
        model_to_match = {
            "registro": str,
            "nome": str,
            "senha": str,
            "foto": str,
            "setor": str,
            "cargo": str,
            "gerencia": bool,
            "salario": float,
            "data_admissao": str,
        }
        
        return model_to_match
    
    def insert(self, data: dict):
        super().insert('funcionario', data)
    
    def update(self, data: dict, query):
        super().update('funcionario', data, query)
    
    def delete(self, query):
        super().delete('funcionario', query)
    
    def search(self, query):
        return super().search('funcionario', query)
    
    def get_all(self):
        return super().get_all('funcionario')
    
    def drop_table(self):
        super().drop_table('funcionario')
    
    def get_top_10_sealers(self):
        todos_funcionarios = self.get_all()
        todas_vendas = Venda('local.db').get_all()
        
        
        
        
    
    def __del__(self):
        super().__del__()
    
    def __repr__(self):
        return f"Funcionario({self.conn})"
    
    def __str__(self):
        return f"Funcionario({self.conn})"
    
    def __bool__(self):
        return True if self.conn else False
    
    def __len__(self):
        return len(self.conn)