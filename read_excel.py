import pandas as pd
import sys

def read_excel_file(filename):
    try:
        xls = pd.ExcelFile(filename)
        print(f'\n{"="*60}')
        print(f'FILE: {filename}')
        print(f'{"="*60}')
        print(f'Sheet names: {xls.sheet_names}\n')

        for sheet in xls.sheet_names:
            print(f'\n{"="*40}')
            print(f'SHEET: {sheet}')
            print(f'{"="*40}')
            df = pd.read_excel(xls, sheet)
            print(df.to_string())
            print('\n')
    except Exception as e:
        print(f'Error reading {filename}: {e}')

if __name__ == '__main__':
    read_excel_file('Case Studies for Review - Purbeck Ice Cream.xlsx')
    read_excel_file('Sync Spider data (1).xlsx')
