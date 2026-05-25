// Maple Ledger Core Script

// Initial static data loaded from CSV
const DEFAULT_DATA = {
        "items": [
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 15,
                    "dex": 3,
                    "accuracy": 0,
                    "total": 18,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 900000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 6,
                    "dex": 11,
                    "accuracy": 4,
                    "total": 21,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1000000,
                "status": "판매중",
                "expiry": "26-05-27",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 11,
                    "dex": 7,
                    "accuracy": 2,
                    "total": 20,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 900000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 11,
                    "dex": 5,
                    "accuracy": 5,
                    "total": 21,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 900000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 11,
                    "dex": 7,
                    "accuracy": 3,
                    "total": 21,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1500000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 1350000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 1,
                    "accuracy": 5,
                    "total": 19,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1500000,
                "status": "판매중",
                "expiry": "26-05-27",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 14,
                    "dex": 6,
                    "accuracy": 0,
                    "total": 20,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1500000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 1350000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 4,
                    "accuracy": 4,
                    "total": 21,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1500000,
                "status": "판매중",
                "expiry": "26-05-27",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 14,
                    "dex": 5,
                    "accuracy": 2,
                    "total": 21,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1500000,
                "status": "판매중",
                "expiry": "26-05-27",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 15,
                    "dex": 1,
                    "accuracy": 5,
                    "total": 21,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1500000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 1350000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 8,
                    "accuracy": 0,
                    "total": 21,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 1500000,
                "status": "판매중",
                "expiry": "26-05-27",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 2,
                    "accuracy": 5,
                    "total": 20,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 2000000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 1800000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 12,
                    "dex": 7,
                    "accuracy": 4,
                    "total": 23,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 2000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 1800000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 7,
                    "accuracy": 3,
                    "total": 23,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 2000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 1800000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 12,
                    "dex": 5,
                    "accuracy": 5,
                    "total": 22,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 2500000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 2250000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 8,
                    "dex": 5,
                    "accuracy": 10,
                    "total": 23,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "O",
                "price": 2500000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 2250000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 16,
                    "dex": 2,
                    "accuracy": 1,
                    "total": 19,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 2500000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 16,
                    "dex": 3,
                    "accuracy": 1,
                    "total": 20,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 2500000,
                "status": "판매완료",
                "expiry": "26-05-28",
                "net_price": 2250000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 15,
                    "dex": 1,
                    "accuracy": 7,
                    "total": 23,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 2500000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 2250000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 12,
                    "dex": 11,
                    "accuracy": 0,
                    "total": 23,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 2700000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 2430000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 15,
                    "dex": 5,
                    "accuracy": 2,
                    "total": 22,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 3000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 2700000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 14,
                    "dex": 9,
                    "accuracy": 0,
                    "total": 23,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 3000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 2700000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 16,
                    "dex": 4,
                    "accuracy": 0,
                    "total": 20,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 3000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 2700000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 8,
                    "dex": 8,
                    "accuracy": 8,
                    "total": 24,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 3000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 2700000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 11,
                    "dex": 9,
                    "accuracy": 4,
                    "total": 24,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 3000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 2700000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 16,
                    "dex": 5,
                    "accuracy": 2,
                    "total": 23,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 4500000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 4050000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 11,
                    "dex": 10,
                    "accuracy": 5,
                    "total": 26,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 4999999,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 4499999
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 16,
                    "dex": 5,
                    "accuracy": 3,
                    "total": 24,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 5000000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 4500000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 5,
                    "accuracy": 8,
                    "total": 26,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 5500000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 17,
                    "dex": 5,
                    "accuracy": 0,
                    "total": 22,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 7000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 6300000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 11,
                    "dex": 9,
                    "accuracy": 7,
                    "total": 27,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 7500000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 16,
                    "dex": 8,
                    "accuracy": 0,
                    "total": 24,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 9900000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 8910000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 15,
                    "dex": 7,
                    "accuracy": 3,
                    "total": 25,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 12000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 10800000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 10,
                    "dex": 14,
                    "accuracy": 4,
                    "total": 28,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 15000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 15,
                    "dex": 9,
                    "accuracy": 3,
                    "total": 27,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 17000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 14,
                    "dex": 10,
                    "accuracy": 3,
                    "total": 27,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 19000000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 17100000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 11,
                    "accuracy": 5,
                    "total": 29,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 23000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 20700000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 18,
                    "dex": 7,
                    "accuracy": 0,
                    "total": 25,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 25000000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 22500000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 17,
                    "dex": 3,
                    "accuracy": 8,
                    "total": 28,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 25000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 22500000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 19,
                    "dex": 6,
                    "accuracy": 6,
                    "total": 31,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 39000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 35100000
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 17,
                    "dex": 8,
                    "accuracy": 7,
                    "total": 32,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 40000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 10,
                    "accuracy": 14,
                    "total": 37,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 55000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스",
                "stats": {
                    "str": 13,
                    "dex": 9,
                    "accuracy": 16,
                    "total": 38,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 55000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스 바지",
                "stats": {
                    "str": 7,
                    "dex": 4,
                    "accuracy": 7,
                    "total": 18,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 4500000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 네오스 바지",
                "stats": {
                    "str": 4,
                    "dex": 9,
                    "accuracy": 6,
                    "total": 19,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 6000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 5400000
            },
            {
                "category": "armor",
                "name": "블루 드래곤 부츠",
                "stats": {
                    "str": 13,
                    "dex": 2,
                    "accuracy": 3,
                    "total": 18,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 10000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 드래곤 부츠",
                "stats": {
                    "str": 10,
                    "dex": 7,
                    "accuracy": 6,
                    "total": 23,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 15000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 드래곤 부츠",
                "stats": {
                    "str": 7,
                    "dex": 11,
                    "accuracy": 8,
                    "total": 26,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 18000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 드래곤 부츠",
                "stats": {
                    "str": 10,
                    "dex": 13,
                    "accuracy": 6,
                    "total": 29,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 25000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 드래곤 부츠",
                "stats": {
                    "str": 12,
                    "dex": 7,
                    "accuracy": 5,
                    "total": 24,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 30000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 드래곤 부츠",
                "stats": {
                    "str": 2,
                    "dex": 8,
                    "accuracy": 19,
                    "total": 29,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 30000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "armor",
                "name": "블루 드래곤 부츠",
                "stats": {
                    "str": 13,
                    "dex": 12,
                    "accuracy": 9,
                    "total": 34,
                    "atk": 0,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 100000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "그린 코르뱅",
                "stats": {
                    "str": 2,
                    "dex": 4,
                    "accuracy": 0,
                    "total": 6,
                    "atk": 10,
                    "upgrades": 0
                },
                "potential": "레어",
                "price": 64000000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 57600000
            },
            {
                "category": "weapon",
                "name": "그린 코르뱅",
                "stats": {
                    "str": 11,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 11,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 32000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "그린 코르뱅",
                "stats": {
                    "str": 8,
                    "dex": 8,
                    "accuracy": 0,
                    "total": 16,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 37000000,
                "status": "판매완료",
                "expiry": "26-05-28",
                "net_price": 33300000
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 5,
                    "dex": 11,
                    "accuracy": 0,
                    "total": 16,
                    "atk": 8,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 20000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 18000000
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 3,
                    "dex": 6,
                    "accuracy": 0,
                    "total": 9,
                    "atk": 8,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 24000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 21600000
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 10,
                    "dex": 13,
                    "accuracy": 0,
                    "total": 23,
                    "atk": 8,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 30000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 27000000
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 5,
                    "dex": 2,
                    "accuracy": 0,
                    "total": 7,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 30000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 4,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 4,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 30000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 3,
                    "dex": 4,
                    "accuracy": 0,
                    "total": 7,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 33000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 6,
                    "dex": 5,
                    "accuracy": 0,
                    "total": 11,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 35000000,
                "status": "판매완료",
                "expiry": "26-05-28",
                "net_price": 31500000
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 0,
                    "dex": 6,
                    "accuracy": 0,
                    "total": 6,
                    "atk": 10,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 63000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 56700000
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 0,
                    "dex": 5,
                    "accuracy": 0,
                    "total": 5,
                    "atk": 10,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 65000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 58500000
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 3,
                    "dex": 9,
                    "accuracy": 0,
                    "total": 12,
                    "atk": 10,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 68000000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 61200000
            },
            {
                "category": "weapon",
                "name": "다크 엠페러",
                "stats": {
                    "str": 6,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 6,
                    "atk": 11,
                    "upgrades": 0
                },
                "potential": "유니크 15%",
                "price": 165000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블러드 엠페러",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "accuracy": 0,
                    "total": 4,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 28000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 25200000
            },
            {
                "category": "weapon",
                "name": "블러드 엠페러",
                "stats": {
                    "str": 0,
                    "dex": 4,
                    "accuracy": 0,
                    "total": 4,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 30000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블러드 엠페러",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 7,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 34000000,
                "status": "판매완료",
                "expiry": "26-05-28",
                "net_price": 30600000
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 1,
                    "dex": 9,
                    "accuracy": 0,
                    "total": 10,
                    "atk": 10,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 65000000,
                "status": "판매완료",
                "expiry": "26-05-26",
                "net_price": 58500000
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 9,
                    "dex": 3,
                    "accuracy": 0,
                    "total": 12,
                    "atk": 8,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 20000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 18000000
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 6,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 6,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 30000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 4,
                    "dex": 3,
                    "accuracy": 0,
                    "total": 7,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 31000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 5,
                    "dex": 2,
                    "accuracy": 0,
                    "total": 7,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 31000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 4,
                    "dex": 5,
                    "accuracy": 0,
                    "total": 9,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 32000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 6,
                    "dex": 7,
                    "accuracy": 0,
                    "total": 13,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 33000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 3,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 3,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 33000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 10,
                    "dex": 9,
                    "accuracy": 0,
                    "total": 19,
                    "atk": 9,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 35000000,
                "status": "판매완료",
                "expiry": "26-05-27",
                "net_price": 31500000
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 3,
                    "dex": 1,
                    "accuracy": 0,
                    "total": 4,
                    "atk": 10,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 62000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 7,
                    "dex": 7,
                    "accuracy": 0,
                    "total": 14,
                    "atk": 10,
                    "upgrades": 0
                },
                "potential": "X",
                "price": 65000000,
                "status": "판매완료",
                "expiry": "26-05-28",
                "net_price": 58500000
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 9,
                    "dex": 10,
                    "accuracy": 0,
                    "total": 19,
                    "atk": 10,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 65000000,
                "status": "판매완료",
                "expiry": "26-05-28",
                "net_price": 58500000
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 5,
                    "dex": 9,
                    "accuracy": 0,
                    "total": 14,
                    "atk": 11,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 130000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 5,
                    "dex": 13,
                    "accuracy": 0,
                    "total": 18,
                    "atk": 11,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 170000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 2,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 2,
                    "atk": 12,
                    "upgrades": 0
                },
                "potential": "미확인",
                "price": 230000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "블루 코르뱅",
                "stats": {
                    "str": 7,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 7,
                    "atk": 12,
                    "upgrades": 0
                },
                "potential": "레어",
                "price": 240000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            },
            {
                "category": "weapon",
                "name": "각종 기타 잔해물",
                "stats": {
                    "str": 0,
                    "dex": 0,
                    "accuracy": 0,
                    "total": 0,
                    "atk": 8,
                    "upgrades": 0
                },
                "potential": "",
                "price": 80000000,
                "status": "판매중",
                "expiry": "26-05-28",
                "net_price": 0
            }
        ],
        "settlement": {
            "total_revenue": 885639999,
            "remittance_1st": 709839200,
            "remittance_label": "정산액",
            "remaining": 175800799,
            "remittances": [
                {
                    "date": "5/23 22:45",
                    "label": "택포 1차 송금액",
                    "amount": 231789200
                },
                {
                    "date": "5/24 14:25",
                    "label": "혼줌 45장 구매",
                    "amount": 80550000
                },
                {
                    "date": "5/24 15:45",
                    "label": "혼줌 50장 구매",
                    "amount": 87500000
                },
                {
                    "date": "5/24 23:05",
                    "label": "택포 2차 송금액",
                    "amount": 120000000
                },
                {
                    "date": "5/24 23:05",
                    "label": "5천 세이브",
                    "amount": 50000000
                },
                {
                    "date": "5/25 8:58",
                    "label": "혼줌 50장 구매",
                    "amount": 80000000
                },
                {
                    "date": "5/25 8:58",
                    "label": "잔해물 장공 24장",
                    "amount": 60000000
                }
            ],
            "received_meso": 22000000
        }
    };

let currentData = JSON.parse(JSON.stringify(DEFAULT_DATA));
let activeTab = 'all';
let viewMode = 'list';
let searchQuery = '';
let hideSoldOut = false;
let headerSortCol = null;
let headerSortDir = 'desc';

// DOM Elements
const elements = {
    totalRevenue: document.getElementById('stat-total-revenue'),
    netRevenue: document.getElementById('stat-net-revenue'),
    remitted: document.getElementById('stat-remitted'),
    remaining: document.getElementById('stat-remaining'),
    labelRemittance: document.getElementById('label-remittance'),
    labelRemittanceDate: document.getElementById('label-remittance-date'),
    
    progressBarFill: document.getElementById('progress-bar-fill'),
    progressPercentage: document.getElementById('progress-percentage'),
    progressRemitted: document.getElementById('progress-remitted'),
    progressRemaining: document.getElementById('progress-remaining'),
    
    searchInput: document.getElementById('search-input'),
    btnClearSearch: document.getElementById('btn-clear-search'),
    
    sortSelect: document.getElementById('sort-select'),
    viewGrid: document.getElementById('view-grid'),
    viewList: document.getElementById('view-list'),
    toggleActiveOnly: document.getElementById('toggle-active-only'),
    activeOnlyIcon: document.getElementById('active-only-icon'),
    
    itemsGrid: document.getElementById('items-grid'),
    itemsListContainer: document.getElementById('items-list-container'),
    itemsTableBody: document.getElementById('items-table-body'),
    emptyState: document.getElementById('empty-state'),
    
    // Tabs count
    countAll: document.getElementById('count-all'),
    countArmor: document.getElementById('count-armor'),
    countActive: document.getElementById('count-active'),
    countSold: document.getElementById('count-sold'),
    
    // Modal
    btnSync: document.getElementById('btn-sync'),
    btnSettings: document.getElementById('btn-settings'),
    settingsModal: document.getElementById('settings-modal'),
    closeModal: document.querySelector('.close-modal'),
    btnSaveSettings: document.getElementById('btn-save-settings'),
    btnResetData: document.getElementById('btn-reset-data'),
    inputSheetUrl: document.getElementById('input-sheet-url'),
    inputCsvRaw: document.getElementById('input-csv-raw'),
    
    // Tooltip detail modal
    detailModal: document.getElementById('detail-modal'),
    closeDetailModal: document.querySelector('.close-detail-modal'),
    itemTooltipDetail: document.getElementById('item-tooltip-detail')
};

// Format Number with Comma
function formatMeso(val) {
    return Number(val).toLocaleString();
}

// Get item image path based on item name
function getItemImagePath(name) {
    const imageMap = {
        '그린 코르뱅': '그린 코르뱅.png',
        '그린 코르뱅 ': '그린 코르뱅.png',
        '다크 엠페러': '다크 엠페러.png',
        '블러드 엠페러': '블러드 엠페러.png',
        '블루 네오스 바지': '블루 네오스 바지.png',
        '블루 네오스': '블루 네오스.png',
        '블루 코르뱅': '블루 코르뱅.png',
        '블루 코르뱅 ': '블루 코르뱅.png',
        '블루 드래곤 부츠': '블루 드래곤 부츠.png'
    };
    // Trim name for lookup
    return imageMap[name] || imageMap[name.trim()] || null;
}

// Convert String Dates or keys
function parseDate(dateStr) {
    if (!dateStr) return new Date(0);
    // Format is usually 26-05-26 (YY-MM-DD)
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        // Assume year 2026
        const year = 2000 + parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const day = parseInt(parts[2]);
        return new Date(year, month, day);
    }
    return new Date(dateStr);
}

// Initialize Application
const DATA_VERSION = 'v8';
function init() {
    // Set default input URL
    elements.inputSheetUrl.value = localStorage.getItem('sheet_url') || elements.inputSheetUrl.value;
    
    // Version check - clear cache if outdated
    const storedVersion = localStorage.getItem('maple_ledger_version');
    if (storedVersion !== DATA_VERSION) {
        localStorage.removeItem('maple_ledger_data');
        localStorage.setItem('maple_ledger_version', DATA_VERSION);
    }
    
    // Load from LocalStorage if exists
    const storedData = localStorage.getItem('maple_ledger_data');
    if (storedData) {
        try {
            currentData = jsonSafeParse(storedData);
        } catch (e) {
            console.error("Failed to parse stored data, using default", e);
        }
    }
    
    bindEvents();
    updateUI();
}

function jsonSafeParse(str) {
    try {
        return JSON.parse(str);
    } catch(e) {
        return DEFAULT_DATA;
    }
}

// Bind UI Events
function bindEvents() {
    // Search
    elements.searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        elements.btnClearSearch.style.display = searchQuery ? 'block' : 'none';
        updateUI();
    });
    
    elements.btnClearSearch.addEventListener('click', () => {
        elements.searchInput.value = '';
        searchQuery = '';
        elements.btnClearSearch.style.display = 'none';
        updateUI();
    });
    
    // Sort Dropdown
    elements.sortSelect.addEventListener('change', () => {
        headerSortCol = null;
        document.querySelectorAll('.sortable').forEach(h => h.classList.remove('active', 'asc', 'desc'));
        updateUI();
    });

    // Header Sort
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', (e) => {
            const sortCol = header.getAttribute('data-sort');
            if (headerSortCol === sortCol) {
                headerSortDir = headerSortDir === 'desc' ? 'asc' : 'desc';
            } else {
                headerSortCol = sortCol;
                headerSortDir = 'desc';
                if (sortCol === 'name' || sortCol === 'status' || sortCol === 'potential') {
                    headerSortDir = 'asc'; // Alphabetical default
                }
            }
            
            // Update UI classes
            document.querySelectorAll('.sortable').forEach(h => {
                h.classList.remove('active', 'asc', 'desc');
                const icon = h.querySelector('.sort-icon');
                if (icon) icon.className = 'fa-solid fa-sort sort-icon';
            });
            header.classList.add('active', headerSortDir);
            const activeIcon = header.querySelector('.sort-icon');
            if (activeIcon) {
                activeIcon.className = `fa-solid fa-sort-${headerSortDir === 'asc' ? 'up' : 'down'} sort-icon`;
            }
            
            updateUI();
        });
    });
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            const clickedBtn = e.currentTarget;
            clickedBtn.classList.add('active');
            activeTab = clickedBtn.getAttribute('data-tab');
            updateUI();
        });
    });

    // Toggle Active Only
    if (elements.toggleActiveOnly) {
        elements.toggleActiveOnly.addEventListener('click', () => {
            hideSoldOut = !hideSoldOut;
            if (hideSoldOut) {
                elements.toggleActiveOnly.style.borderColor = 'var(--accent-blue)';
                elements.toggleActiveOnly.style.color = 'var(--accent-blue)';
                elements.activeOnlyIcon.classList.remove('fa-filter');
                elements.activeOnlyIcon.classList.add('fa-filter-circle-xmark');
                elements.activeOnlyIcon.style.color = 'var(--accent-blue)';
            } else {
                elements.toggleActiveOnly.style.borderColor = 'var(--border-color)';
                elements.toggleActiveOnly.style.color = 'var(--color-text-main)';
                elements.activeOnlyIcon.classList.remove('fa-filter-circle-xmark');
                elements.activeOnlyIcon.classList.add('fa-filter');
                elements.activeOnlyIcon.style.color = 'var(--color-text-muted)';
            }
            updateUI();
        });
    }
    
    // View Toggle
    elements.viewGrid.addEventListener('click', () => {
        viewMode = 'grid';
        elements.viewGrid.classList.add('active');
        elements.viewList.classList.remove('active');
        elements.itemsGrid.style.display = 'grid';
        elements.itemsListContainer.style.display = 'none';
        updateUI();
    });
    
    elements.viewList.addEventListener('click', () => {
        viewMode = 'list';
        elements.viewList.classList.add('active');
        elements.viewGrid.classList.remove('active');
        elements.itemsGrid.style.display = 'none';
        elements.itemsListContainer.style.display = 'block';
        updateUI();
    });
    
    // Modals
    elements.btnSettings.addEventListener('click', () => {
        elements.settingsModal.classList.add('active');
    });
    
    elements.closeModal.addEventListener('click', () => {
        elements.settingsModal.classList.remove('active');
    });
    
    elements.closeDetailModal.addEventListener('click', () => {
        elements.detailModal.classList.remove('active');
    });
    
    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === elements.settingsModal) {
            elements.settingsModal.classList.remove('active');
        }
        if (e.target === elements.detailModal) {
            elements.detailModal.classList.remove('active');
        }
    });
    
    // Sync Button
    elements.btnSync.addEventListener('click', () => {
        syncDataFromSheet();
    });
    
    // Save Settings
    elements.btnSaveSettings.addEventListener('click', () => {
        const customCsv = elements.inputCsvRaw.value.trim();
        const sheetUrl = elements.inputSheetUrl.value.trim();
        
        localStorage.setItem('sheet_url', sheetUrl);
        
        if (customCsv) {
            parseRawCSVAndApply(customCsv);
            elements.settingsModal.classList.remove('active');
        } else {
            syncDataFromSheet(() => {
                elements.settingsModal.classList.remove('active');
            });
        }
    });
    
    // Reset Data
    elements.btnResetData.addEventListener('click', () => {
        if (confirm("기본 데이터로 복원하시겠습니까? (저장된 변경사항이 삭제됩니다)")) {
            currentData = JSON.parse(JSON.stringify(DEFAULT_DATA));
            localStorage.removeItem('maple_ledger_data');
            elements.inputCsvRaw.value = '';
            updateUI();
            elements.settingsModal.classList.remove('active');
            alert("기본 데이터로 복원되었습니다.");
        }
    });
}

// Synchronize from Sheet
function syncDataFromSheet(callback) {
    const url = elements.inputSheetUrl.value.trim();
    if (!url) {
        alert("Google Sheet CSV URL을 입력해주세요.");
        return;
    }
    
    elements.btnSync.disabled = true;
    elements.btnSync.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 동기화 중...';
    
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not OK");
            return response.text();
        })
        .then(csvText => {
            parseRawCSVAndApply(csvText);
            elements.btnSync.disabled = false;
            elements.btnSync.innerHTML = '<i class="fa-solid fa-rotate"></i> 시트 동기화';
            alert("동기화가 완료되었습니다!");
            if (callback) callback();
        })
        .catch(error => {
            console.error("Error fetching sheet:", error);
            elements.btnSync.disabled = false;
            elements.btnSync.innerHTML = '<i class="fa-solid fa-rotate"></i> 시트 동기화';
            
            // CORS fallback instruction
            alert("CORS 보안 정책으로 인해 브라우저에서 직접 시트를 가져올 수 없습니다.\n\n설정 창에서 CSV 데이터를 직접 붙여넣거나, Google Sheet에서 파일 -> 공유 -> 웹에 게시(CSV 형식)를 올바르게 적용했는지 확인해주세요.");
        });
}

// Clean Int utility for JavaScript parser
function cleanInt(val) {
    if (!val) return 0;
    const valClean = val.replace(/[^\d\-]/g, '');
    return valClean ? parseInt(valClean, 10) : 0;
}

// Parse Raw CSV
function parseRawCSVAndApply(csvText) {
    const lines = csvText.split('\n').map(line => {
        // Handle comma in quotes correctly
        let result = [];
        let current = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            let char = line[i];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        result.push(current.trim());
        return result;
    });

    let items = [];
    let settlement = {};
    let currentCategory = 'armor';
    
    for (let i = 0; i < lines.length; i++) {
        const row = lines[i];
        if (row.length === 0 || row.every(x => x === "")) continue;
        
        if (row[0] === '장비명') {
            if (row.includes('명중률')) {
                currentCategory = 'armor';
            } else if (row.includes('공격력')) {
                currentCategory = 'weapon';
            }
            continue;
        }
        
        // Settlement check
        const rowStr = row.join('');
        if (rowStr.includes('총 금액')) {
            settlement.total_revenue = cleanInt(row[row.length - 1]);
            continue;
        }
        if (rowStr.includes('남은금액') || rowStr.includes('남은 금액')) {
            settlement.remaining = cleanInt(row[row.length - 1]);
            continue;
        }
        if (rowStr.includes('받은 메소')) {
            settlement.received_meso = cleanInt(row[row.length - 1]);
            continue;
        }
        
        // Remittance logs check (has date pattern like m/d or m/d H:M)
        let hasDate = false;
        let dateIdx = -1;
        for (let idx = 0; idx < row.length; idx++) {
            if (/\d+\/\d+/.test(row[idx])) {
                hasDate = true;
                dateIdx = idx;
                break;
            }
        }
        if (hasDate) {
            const datePart = row[dateIdx].trim();
            const labelPart = (dateIdx + 1 < row.length) ? row[dateIdx + 1].trim() : '';
            const amount = cleanInt(row[row.length - 1]);
            if (!settlement.remittances) {
                settlement.remittances = [];
            }
            settlement.remittances.push({
                date: datePart,
                label: labelPart,
                amount: amount
            });
            continue;
        }
        
        // Standard item row
        if (currentCategory === 'armor') {
            if (row.length >= 8) {
                const name = row[0];
                if (!name) continue;
                items.push({
                    category: 'armor',
                    name: name,
                    stats: {
                        str: cleanInt(row[1]),
                        dex: cleanInt(row[2]),
                        accuracy: cleanInt(row[3]),
                        total: cleanInt(row[4]),
                        atk: 0,
                        upgrades: 0
                    },
                    potential: row[5] || 'X',
                    price: cleanInt(row[6]),
                    status: row[7] || '판매중',
                    expiry: row[8] || '',
                    net_price: cleanInt(row[9]) || 0
                });
            }
        } else if (currentCategory === 'weapon') {
            if (row.length >= 8) {
                const name = row[0];
                if (!name) continue;
                const str = cleanInt(row[2]);
                const dex = cleanInt(row[3]);
                items.push({
                    category: 'weapon',
                    name: name,
                    stats: {
                        str: str,
                        dex: dex,
                        accuracy: 0,
                        total: str + dex,
                        atk: cleanInt(row[1]),
                        upgrades: cleanInt(row[4])
                    },
                    potential: row[5] || 'X',
                    price: cleanInt(row[6]),
                    status: row[7] || '판매중',
                    expiry: row[8] || '',
                    net_price: cleanInt(row[9]) || 0
                });
            }
        }
    }
    
    if (settlement.remittances && settlement.remittances.length > 0) {
        settlement.remittance_1st = settlement.remittances[0].amount;
        settlement.remittance_label = settlement.remittances[0].label || '정산액';
    }
    
    // Save to State and LocalStorage
    currentData = {
        items: items,
        settlement: settlement
    };
    
    localStorage.setItem('maple_ledger_data', JSON.stringify(currentData));
    updateUI();
}

// Update UI state based on current filters and search
function updateUI() {
    const filtered = filterData();
    const sorted = sortData(filtered);
    
    renderStats(sorted);
    renderTabCounts();
    
    if (sorted.length === 0) {
        elements.emptyState.style.display = 'block';
        elements.itemsTableBody.innerHTML = '';
    } else {
        elements.emptyState.style.display = 'none';
        renderList(sorted);
    }
}

// Filter Data
function filterData() {
    return currentData.items.filter(item => {
        // Tab Filter - weapon category is treated same as armor (no weapon tab)
        if (activeTab === 'armor' && item.category !== 'armor' && item.category !== 'weapon') return false;
        if (activeTab === 'active' && item.status !== '판매중') return false;
        if (activeTab === 'sold' && item.status !== '판매완료') return false;
        
        // Hide Sold Out Toggle
        if (hideSoldOut && item.status !== '판매중') return false;
        
        // Search Filter
        if (searchQuery) {
            const matchesName = item.name.toLowerCase().includes(searchQuery);
            const matchesStats = 
                item.stats.str.toString() === searchQuery ||
                item.stats.dex.toString() === searchQuery ||
                item.stats.total.toString() === searchQuery ||
                (item.stats.accuracy && item.stats.accuracy.toString() === searchQuery) ||
                (item.stats.atk && item.stats.atk.toString() === searchQuery) ||
                item.potential.toLowerCase().includes(searchQuery) ||
                item.status.toLowerCase().includes(searchQuery);
            return matchesName || matchesStats;
        }
        
        return true;
    });
}

// Sort Data
function sortData(list) {
    if (headerSortCol) {
        return list.sort((a, b) => {
            let valA, valB;
            switch(headerSortCol) {
                case 'name': valA = a.name; valB = b.name; break;
                case 'stats': valA = a.stats.total; valB = b.stats.total; break;
                case 'potential': valA = a.potential || ''; valB = b.potential || ''; break;
                case 'price': valA = a.price; valB = b.price; break;
                case 'status': valA = a.status; valB = b.status; break;
                case 'expiry': 
                    valA = parseDate(a.expiry); 
                    valB = parseDate(b.expiry); 
                    break;
                default: valA = 0; valB = 0;
            }
            
            if (valA < valB) return headerSortDir === 'asc' ? -1 : 1;
            if (valA > valB) return headerSortDir === 'asc' ? 1 : -1;
            return 0;
        });
    }

    const sortBy = elements.sortSelect.value;
    return list.sort((a, b) => {
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'stats-desc') return b.stats.total - a.stats.total;
        if (sortBy === 'atk-desc') return b.stats.atk - a.stats.atk;
        if (sortBy === 'expiry-asc') {
            const da = parseDate(a.expiry);
            const db = parseDate(b.expiry);
            return da - db;
        }
        return 0;
    });
}

// Render Statistics Card Calculations
function renderStats(filteredList) {
    // Total Revenue (Total registered values)
    // We calculate from total values in currentData
    let totalAllRevenue = 0;
    let netSoldRevenue = 0;
    
    currentData.items.forEach(item => {
        totalAllRevenue += item.price;
        if (item.status === '판매완료') {
            netSoldRevenue += item.net_price || (item.price * 0.9); // default 10% fee if empty
        }
    });

    elements.totalRevenue.innerText = formatMeso(totalAllRevenue);
    elements.netRevenue.innerText = formatMeso(netSoldRevenue);
    
    // 남은 금액: 시트의 remaining 값 직접 사용
    let remaining = currentData.settlement.remaining || 0;
    
    // 정산액: 시트의 모든 remittance 항목 합산 (택포 송금 + 혼줌 구매 + 세이브 등 전부)
    let remitted = 0;
    if (currentData.settlement.remittances && currentData.settlement.remittances.length > 0) {
        remitted = currentData.settlement.remittances
            .reduce((sum, r) => sum + (r.amount || 0), 0);
    } else {
        remitted = currentData.settlement.remittance_1st || 0;
    }
    
    // 카드 라벨: 항상 "정산액"으로 표시
    elements.labelRemittance.innerText = '정산액';
    elements.labelRemittanceDate.innerText = '정산 완료 후 사용된 금액 합계';
    
    elements.remitted.innerText = formatMeso(remitted);
    elements.remaining.innerText = formatMeso(remaining);
    
    // Progress calculation
    const totalRemittable = remitted + remaining;
    const progressPercent = totalRemittable > 0 ? Math.round((remitted / totalRemittable) * 100) : 0;
    
    elements.progressPercentage.innerText = progressPercent + '%';
    elements.progressBarFill.style.width = progressPercent + '%';
    elements.progressRemitted.innerText = formatMeso(remitted) + ' 메소';
    elements.progressRemaining.innerText = formatMeso(remaining) + ' 메소';
}

// Render Tab Counts
function renderTabCounts() {
    let counts = { all: 0, armor: 0, active: 0, sold: 0 };
    
    currentData.items.forEach(item => {
        counts.all++;
        // weapon category is included in armor count (no separate weapon tab)
        if (item.category === 'armor' || item.category === 'weapon') counts.armor++;
        if (item.status === '판매중') counts.active++;
        if (item.status === '판매완료') counts.sold++;
    });
    
    elements.countAll.innerText = counts.all;
    elements.countArmor.innerText = counts.armor;
    elements.countActive.innerText = counts.active;
    elements.countSold.innerText = counts.sold;
}

// Render Card Grid View
function renderGrid(list) {
    elements.itemsGrid.innerHTML = '';
    
    list.forEach(item => {
        const card = document.createElement('div');
        card.className = `equip-card status-${item.status === '판매중' ? 'active' : 'sold'}`;
        
        // Potential Class border
        if (item.potential === '레어') card.classList.add('pot-rare');
        else if (item.potential === '미확인') card.classList.add('pot-unid');
        
        const hasAtk = item.stats.atk > 0;
        const avatarType = hasAtk ? 'weapon-avatar' : 'armor-avatar';
        const imgPath = getItemImagePath(item.name);
        const avatarContent = imgPath
            ? `<img src="${imgPath}" alt="${item.name}" class="item-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="item-avatar-fallback" style="display:none;">${item.name.includes('바지') ? '<i class="fa-solid fa-socks"></i>' : (item.name.includes('코르뱅') || item.name.includes('엠페러') ? '<i class="fa-solid fa-mitten"></i>' : '<i class="fa-solid fa-shirt"></i>')}</span>`
            : `<span>${item.name.includes('바지') ? '<i class="fa-solid fa-socks"></i>' : (item.name.includes('코르뱅') || item.name.includes('엠페러') ? '<i class="fa-solid fa-mitten"></i>' : '<i class="fa-solid fa-shirt"></i>')}</span>`;
            
        const isWeapon = hasAtk;
        
        let statsHTML = '';
        if (isWeapon) {
            statsHTML = `
                <div class="stat-item"><span class="stat-name">공격력</span><span class="stat-val stat-highlight">${item.stats.atk}</span></div>
                <div class="stat-item"><span class="stat-name">업횟</span><span class="stat-val">${item.stats.upgrades}</span></div>
                <div class="stat-item"><span class="stat-name">STR</span><span class="stat-val">${item.stats.str}</span></div>
                <div class="stat-item"><span class="stat-name">DEX</span><span class="stat-val">${item.stats.dex}</span></div>
            `;
        } else {
            statsHTML = `
                <div class="stat-item"><span class="stat-name">STR</span><span class="stat-val">${item.stats.str}</span></div>
                <div class="stat-item"><span class="stat-name">DEX</span><span class="stat-val">${item.stats.dex}</span></div>
                <div class="stat-item"><span class="stat-name">명중률</span><span class="stat-val">${item.stats.accuracy}</span></div>
                <div class="stat-item"><span class="stat-name">합스텟</span><span class="stat-val stat-highlight">${item.stats.total}</span></div>
            `;
        }
        
        let potentialBadge = '';
        if (item.potential === '레어') {
            potentialBadge = '<span class="pot-badge pot-rare-badge">레어 잠재</span>';
        } else if (item.potential === '미확인') {
            potentialBadge = '<span class="pot-badge pot-unid-badge">잠재 미확인</span>';
        } else {
            potentialBadge = '<span class="pot-badge pot-x">잠재 없음</span>';
        }
        
        let netPriceHTML = '';
        if (item.status === '판매완료') {
            const netVal = item.net_price || Math.round(item.price * 0.9);
            netPriceHTML = `
                <div class="net-price-box">
                    <span>수수료 제외:</span>
                    <span class="net-price-val">${formatMeso(netVal)}</span>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="card-badge badge-${item.status === '판매중' ? 'active' : 'sold'}">
                ${item.status}
            </div>
            <div class="sold-watermark">SOLD OUT</div>
            <div class="card-header-area">
                <div class="item-avatar ${avatarType}">
                    ${avatarContent}
                </div>
                <div class="item-title-group">
                    <span class="item-name">${item.name}</span>
                    <span class="item-expiry">만료일: ${item.expiry || '-'}</span>
                </div>
            </div>
            
            <div class="card-stats-area">
                ${statsHTML}
            </div>
            
            ${potentialBadge}
            
            <div class="card-price-area">
                <span class="price-title">판매 가격</span>
                <span class="price-val">${formatMeso(item.price)}</span>
            </div>
            ${netPriceHTML}
        `;
        
        // Show tooltip on click
        card.addEventListener('click', () => {
            showItemTooltip(item);
        });
        
        elements.itemsGrid.appendChild(card);
    });
}

// Render Rich List View
function renderList(list) {
    elements.itemsTableBody.innerHTML = '';
    
    list.forEach(item => {
        const row = document.createElement('div');
        row.className = 'rich-list-row' + (item.status === '판매완료' ? ' row-sold' : '');
        
        const imgPath = getItemImagePath(item.name);
        const imgHTML = imgPath
            ? `<img src="${imgPath}" alt="${item.name}" class="rl-item-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
               <div class="rl-item-icon-fallback" style="display:none;"><i class="fa-solid fa-shield-halved"></i></div>`
            : `<div class="rl-item-icon-fallback"><i class="fa-solid fa-shield-halved"></i></div>`;

        const hasAtk = item.stats.atk > 0;

        let potentialLabel = '잠재 없음';
        let potentialClass = 'pot-none';
        
        const potValue = item.potential ? item.potential.trim().toUpperCase() : '';
        if (potValue && potValue !== 'X' && potValue !== '없음' && potValue !== '잠재 없음' && potValue !== '-') {
            if (item.potential.includes('레어')) { potentialLabel = '레어 잠재'; potentialClass = 'pot-rare'; }
            else if (item.potential.includes('에픽')) { potentialLabel = '에픽 잠재'; potentialClass = 'pot-epic'; }
            else if (item.potential.includes('유니크')) { potentialLabel = '유니크 잠재'; potentialClass = 'pot-unique'; }
            else if (item.potential.includes('미확인')) { potentialLabel = '잠재 미확인'; potentialClass = 'pot-unid'; }
            else { potentialLabel = '잠재 있음'; potentialClass = 'pot-yes'; }
        } else if (potValue === '미확인') {
            potentialLabel = '잠재 미확인'; potentialClass = 'pot-unid';
        }

        const statusClass = item.status === '판매중' ? 'status-active' : 'status-sold';
        const statusLabel = item.status === '판매중' ? '판매중' : '판매완료';

        row.innerHTML = `
            <div class="rl-col-img">
                <div class="rl-img-wrap">${imgHTML}</div>
            </div>
            <div class="rl-col-name">
                <span class="rl-name">${item.name}</span>
            </div>
            <div class="rl-col-stats">
                <span class="rl-stat-chip">STR <strong>${item.stats.str}</strong></span>
                <span class="rl-stat-chip">DEX <strong>${item.stats.dex}</strong></span>
                <span class="rl-stat-chip">명중 <strong>${item.stats.accuracy || 0}</strong></span>
                <span class="rl-stat-chip">합스탯 <strong>${item.stats.total}</strong></span>
                <span class="rl-stat-chip">업횟 <strong>${item.stats.upgrades || 0}</strong></span>
                ${hasAtk ? `<span class="rl-stat-chip">공격력 <strong>${item.stats.atk}</strong></span>` : ''}
            </div>
            <div class="rl-col-potential">
                <span class="pot-badge ${potentialClass}">${potentialLabel}</span>
            </div>
            <div class="rl-col-price">
                <span class="rl-price">${formatMeso(item.price)}<em>메소</em></span>
            </div>
            <div class="rl-col-status">
                <span class="rl-status-badge ${statusClass}">${statusLabel}</span>
            </div>
            <div class="rl-col-expiry">
                <span class="rl-expiry">${item.expiry || '-'}</span>
            </div>
        `;

        row.addEventListener('click', () => showItemTooltip(item));
        elements.itemsTableBody.appendChild(row);
    });
}

// Show MapleStory Styled Tooltip
function showItemTooltip(item) {
    const hasAtk = item.stats.atk > 0;
    const imgPath = getItemImagePath(item.name);
    const avatarContent = imgPath
        ? `<img src="${imgPath}" alt="${item.name}" class="tooltip-item-img">`
        : (item.name.includes('바지') 
            ? '<i class="fa-solid fa-socks"></i>' 
            : (item.name.includes('코르뱅') || item.name.includes('엠페러') || item.name.includes('장갑')
                ? '<i class="fa-solid fa-mitten"></i>'
                : '<i class="fa-solid fa-shirt"></i>'));
        
    let statsHTML = '';
    if (hasAtk) {
        statsHTML = `
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">장비 분류</span>
                <span class="maple-tooltip-stat-val">${item.name.includes('코르뱅') || item.name.includes('엠페러') || item.name.includes('장갑') ? '장갑 (Gloves)' : '무기 (Weapon)'}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">공격력</span>
                <span class="maple-tooltip-stat-val highlight">+${item.stats.atk}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">업그레이드 가능 횟수</span>
                <span class="maple-tooltip-stat-val">${item.stats.upgrades}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">STR (힘)</span>
                <span class="maple-tooltip-stat-val">+${item.stats.str}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">DEX (민첩)</span>
                <span class="maple-tooltip-stat-val">+${item.stats.dex}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">합스텟</span>
                <span class="maple-tooltip-stat-val highlight">+${item.stats.total}</span>
            </div>
        `;
    } else {
        statsHTML = `
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">장비 분류</span>
                <span class="maple-tooltip-stat-val">${item.name.includes('바지') ? '하의 (Pants)' : '상의 (Top)'}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">STR (힘)</span>
                <span class="maple-tooltip-stat-val">+${item.stats.str}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">DEX (민첩)</span>
                <span class="maple-tooltip-stat-val">+${item.stats.dex}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">명중률</span>
                <span class="maple-tooltip-stat-val">+${item.stats.accuracy}</span>
            </div>
            <div class="maple-tooltip-stat-item">
                <span class="maple-tooltip-stat-name">합스텟</span>
                <span class="maple-tooltip-stat-val highlight">+${item.stats.total}</span>
            </div>
        `;
    }
    
    let potentialHTML = '';
    if (item.potential && item.potential !== 'X') {
        potentialHTML = `
            <div class="maple-tooltip-potential">
                <span class="maple-tooltip-pot-title">잠재능력 등급 [${item.potential}]</span>
                <span class="maple-tooltip-pot-desc">
                    ${item.potential === '미확인' ? '돋보기를 사용하여 잠재능력을 감정할 수 있습니다.' : '감정 완료된 잠재 장비 아이템입니다.'}
                </span>
            </div>
        `;
    }
    
    elements.itemTooltipDetail.innerHTML = `
        <div class="maple-tooltip">
            <div class="maple-tooltip-header">
                <h4 class="maple-tooltip-title">${item.name}</h4>
                <span class="maple-tooltip-type">(${item.status})</span>
            </div>
            
            <div class="maple-tooltip-avatar-row">
                <div class="maple-tooltip-avatar">
                    ${avatarContent}
                </div>
            </div>
            
            <div class="maple-tooltip-stats">
                ${statsHTML}
            </div>
            
            ${potentialHTML}
            
            <div class="maple-tooltip-price">
                가격: ${formatMeso(item.price)} MESO
            </div>
            ${item.status === '판매완료' ? `
                <div class="maple-tooltip-stat-item" style="border-top: 1px dashed rgba(255,255,255,0.1); padding-top:8px;">
                    <span class="maple-tooltip-stat-name" style="color:var(--accent-blue);">수수료 10% 제외:</span>
                    <span class="maple-tooltip-stat-val" style="color:var(--accent-blue);">${formatMeso(item.net_price || Math.round(item.price * 0.9))} MESO</span>
                </div>
            ` : ''}
        </div>
    `;
    
    elements.detailModal.classList.add('active');
}

// Run on page load
window.addEventListener('DOMContentLoaded', init);
