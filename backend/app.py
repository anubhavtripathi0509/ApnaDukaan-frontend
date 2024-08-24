from flask import Flask, request, jsonify
from flask_cors import CORS
from controller.clients import create_client, get_all_clients, get_client_by_id, update_client, delete_client
from controller.inquiry import create_inquiry, get_all_inquiries, get_inquiry_by_id, update_inquiry, delete_inquiry

app = Flask(__name__)
CORS(app)

# Client endpoints
@app.route('/add-client', methods=['POST'])
def add_client():
    client_data = request.json
    create_client(client_data)
    return jsonify({'message': 'Client added successfully!'}), 201

@app.route('/clients', methods=['GET'])
def clients():
    clients = get_all_clients()
    return jsonify(clients), 200

@app.route('/client/<int:id>', methods=['GET'])
def client(id):
    client = get_client_by_id(id)
    if client:
        return jsonify(client), 200
    return jsonify({'error': 'Client not found'}), 404

@app.route('/client/<int:id>', methods=['PUT'])
def update_client(id):
    updated_data = request.json
    update_client(id, updated_data)
    return jsonify({'message': 'Client updated successfully!'}), 200

@app.route('/client/<int:id>', methods=['DELETE'])
def delete_client(id):
    delete_client(id)
    return jsonify({'message': 'Client deleted successfully!'}), 200


# Inquiry endpoints
@app.route('/add-inquiry', methods=['POST'])
def add_inquiry():
    inquiry_data = request.json
    create_inquiry(inquiry_data)
    return jsonify({'message': 'Inquiry added successfully!'}), 201

@app.route('/inquiries', methods=['GET'])
def inquiries():
    inquiries = get_all_inquiries()
    return jsonify(inquiries), 200


@app.route('/inquiry/<int:id>', methods=['GET'])
def inquiry(id):
    inquiry = get_inquiry_by_id(id)
    if inquiry:
        return jsonify(inquiry), 200
    return jsonify({'error': 'Inquiry not found'}), 404

@app.route('/inquiry/<int:id>', methods=['PUT'])
def update_inquiry_route(id):
    updated_data = request.json
    update_inquiry(id, updated_data)
    return jsonify({'message': 'Inquiry updated successfully!'}), 200

@app.route('/inquiry/<int:id>', methods=['DELETE'])
def delete_inquiry_route(id):
    delete_inquiry(id)
    return jsonify({'message': 'Inquiry deleted successfully!'}), 200

if __name__ == '__main__':
    app.run(debug=True)
