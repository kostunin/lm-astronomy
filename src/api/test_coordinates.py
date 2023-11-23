import json

from pydantic import ValidationError

from dataloader import _get_coordinates_list, get_atel_dataset, RecordMetadata

path = 'data/atel/entities.json'

count_broken = 0
count_empty = 0
list_broken = []
list_empty = []
list_single_obj = []

with open(path, 'r') as f:
    raw_records = json.load(f)
    for name, data in raw_records.items():
        try:
            md = RecordMetadata(record_id=name, **data)
            if len(md.skycoord) == 0:
                count_empty += 1
                list_empty.append(name)
        except ValidationError as e:
            print(name, e)
            count_broken += 1
            list_broken.append(name)
        if len(md.object_name) == 1 and len(md.skycoord) == 1:
            list_single_obj.append(md)


print(count_broken, count_empty)
print(list_broken)
print(len(list_single_obj))