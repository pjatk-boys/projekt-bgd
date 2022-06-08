class ServerError(Exception):
    def __init__(self):
        self.message = super().__str__()


class ItemNotFound(ServerError):
    def __init__(self, id: str):
        self.message = f'Item with id: {id} not found'


class InvalidEvent(ServerError):
    def __init__(self, id: str):
        self.message = f'Event validation failed'
