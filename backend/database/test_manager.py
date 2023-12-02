import unittest

from database.manager import Manager

class TestManager(unittest.TestCase):
    def setUp(self):
        self.manager = Manager("test_db")
        self.table_name = "test_table"
        self.data = {"name": "John", "age": 30}
        self.query = {"name": "John"}
    
    def tearDown(self):
        self.manager.drop_table(self.table_name)
        del self.manager
    
    def test_insert(self):
        self.manager.insert(self.table_name, self.data)
        result = self.manager.search(self.table_name, self.query)
        self.assertEqual(result, [self.data])
    
    def test_update(self):
        self.manager.insert(self.table_name, self.data)
        new_data = {"age": 35}
        self.manager.update(self.table_name, new_data, self.query)
        result = self.manager.search(self.table_name, self.query)
        self.assertEqual(result, [{"name": "John", "age": 35}])
    
    def test_delete(self):
        self.manager.insert(self.table_name, self.data)
        self.manager.delete(self.table_name, self.query)
        result = self.manager.search(self.table_name, self.query)
        self.assertEqual(result, [])
    
    def test_search(self):
        self.manager.insert(self.table_name, self.data)
        result = self.manager.search(self.table_name, self.query)
        self.assertEqual(result, [self.data])
    
    def test_get_all(self):
        self.manager.insert(self.table_name, self.data)
        result = self.manager.get_all(self.table_name)
        self.assertEqual(result, [self.data])
    
    def test_drop_table(self):
        self.manager.drop_table(self.table_name)
        result = self.manager.search(self.table_name, self.query)
        self.assertEqual(result, [])
    
    def test_repr(self):
        expected_repr = f"Manager({self.manager.conn})"
        self.assertEqual(repr(self.manager), expected_repr)
    
    def test_str(self):
        expected_str = f"Manager({self.manager.conn})"
        self.assertEqual(str(self.manager), expected_str)
    
    def test_bool(self):
        self.assertTrue(bool(self.manager))
    
    def test_len(self):
        expected_len = len(self.manager.conn)
        self.assertEqual(len(self.manager), expected_len)

if __name__ == "__main__":
    unittest.main()