# Modelos de db TinyDB

## Funcionário
```json
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
```

## Metas

```json

{
    "tipo": "str: <- tipos | NN",
    "valor": "float: 0 > 99999.99 | NN",
    "setor": "list[str: <- setores] | NN",
    "prazo": "int: 0 > 45 |N",
    "recompensa": "int 0 > 99999.99 | NN",
    "cargo": "str: <- cargos | NN",
}


```

## Vendas

```json

    {
        "valor": "float: 0 > 99999.99 | NN",
        "data": "date: %d/%m/%Y | NN",
        "funcionario": "str: registro | NN",
        "setor": "str: 3 > 50 | NN",
    }

```


### Documentos de apoio

#### Tipos de metas

```json
[
    "Vendas",
    "Produtividade",
    "Faturamento",
    "Outros"
]
```
#### Setores

```json
[
    "Vendas",
    "Produção",
    "Administrativo",
    "Outros"
]
```
#### Cargos

```json
[
    "Vendedor",
    "Gerente",
    "Diretor",
    "Outros"
]
```

