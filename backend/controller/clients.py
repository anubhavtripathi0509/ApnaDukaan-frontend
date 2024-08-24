import sqlite3

# Database connection
def get_db_connection():
    conn = sqlite3.connect('./database/easegym.db')
    conn.row_factory = sqlite3.Row
    return conn

# Create the clients table if it does not exist
def create_clients_table():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('''
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            invoice_id TEXT,
            invoice_date TEXT,
            member_id TEXT,
            client_name TEXT,
            contact_number TEXT,
            alternate_contact TEXT,
            email TEXT,
            client_source TEXT,
            joining_date TEXT,
            package TEXT,
            price REAL,
            discount REAL,
            admission_charges REAL,
            tax TEXT,
            redeem_rewards REAL,
            amount_payable REAL,
            amount_paid REAL,
            payment_mode TEXT,
            balance REAL,
            client_representative TEXT,
            appoint_trainer TEXT
        )
    ''')

    conn.commit()
    conn.close()

# Create a new client in the database
def create_client(client_data):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('''
        INSERT INTO clients (
            invoice_id, invoice_date, member_id, client_name, contact_number, alternate_contact,
            email, client_source, joining_date, package, price, discount, admission_charges,
            tax, redeem_rewards, amount_payable, amount_paid, payment_mode, balance,
            client_representative, appoint_trainer
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (
        client_data['invoice_id'], client_data['invoice_date'], client_data['member_id'],
        client_data['client_name'], client_data['contact_number'], client_data['alternate_contact'],
        client_data['email'], client_data['client_source'], client_data['joining_date'],
        client_data['package'], client_data['price'], client_data['discount'],
        client_data['admission_charges'], client_data['tax'], client_data['redeem_rewards'],
        client_data['amount_payable'], client_data['amount_paid'], client_data['payment_mode'],
        client_data['balance'], client_data['client_representative'], client_data['appoint_trainer']
    ))

    conn.commit()
    conn.close()

# Read all clients from the database
def get_all_clients():
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM clients')
    clients = cursor.fetchall()

    conn.close()

    return [dict(client) for client in clients]

# Read a specific client by ID
def get_client_by_id(client_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM clients WHERE id = ?', (client_id,))
    client = cursor.fetchone()

    conn.close()

    return dict(client) if client else None

# Update a client's information (optional)
def update_client(client_id, updated_data):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('''
        UPDATE clients SET
            invoice_id = ?, invoice_date = ?, member_id = ?, client_name = ?, contact_number = ?,
            alternate_contact = ?, email = ?, client_source = ?, joining_date = ?, package = ?,
            price = ?, discount = ?, admission_charges = ?, tax = ?, redeem_rewards = ?,
            amount_payable = ?, amount_paid = ?, payment_mode = ?, balance = ?,
            client_representative = ?, appoint_trainer = ?
        WHERE id = ?
    ''', (
        updated_data['invoice_id'], updated_data['invoice_date'], updated_data['member_id'],
        updated_data['client_name'], updated_data['contact_number'], updated_data['alternate_contact'],
        updated_data['email'], updated_data['client_source'], updated_data['joining_date'],
        updated_data['package'], updated_data['price'], updated_data['discount'],
        updated_data['admission_charges'], updated_data['tax'], updated_data['redeem_rewards'],
        updated_data['amount_payable'], updated_data['amount_paid'], updated_data['payment_mode'],
        updated_data['balance'], updated_data['client_representative'], updated_data['appoint_trainer'],
        client_id
    ))

    conn.commit()
    conn.close()

# Delete a client from the database (optional)
def delete_client(client_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('DELETE FROM clients WHERE id = ?', (client_id,))
    
    conn.commit()
    conn.close()

# Ensure the table exists when the script runs
create_clients_table()
