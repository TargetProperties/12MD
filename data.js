var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.667757534767027,
        "pitch": -0.24296325336669788,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.720295511497623,
          "pitch": 0.1422583496283245,
          "rotation": 0,
          "target": "1-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.3644100632183207,
        "pitch": 0.08879579714316144,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.4775896768459669,
          "pitch": 0.5208456844665719,
          "rotation": 0,
          "target": "3-g-floor"
        },
        {
          "yaw": -1.6986883467137268,
          "pitch": 0.5916078531820368,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.016668016987417,
        "pitch": 0.22512286556134953,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.4208136002890015,
          "pitch": 0.33098640054000583,
          "rotation": 0,
          "target": "3-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-g-floor",
      "name": "G Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.23217818465611728,
        "pitch": 0.32020696162701867,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.544014942189274,
          "pitch": 0.17608916579925094,
          "rotation": 0,
          "target": "15-i-floor"
        },
        {
          "yaw": 0.6294848016845194,
          "pitch": 0.25325265828398,
          "rotation": 0.7853981633974483,
          "target": "4-living-area"
        },
        {
          "yaw": -0.7329422529535492,
          "pitch": 0.27605839957765177,
          "rotation": 5.497787143782138,
          "target": "2-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-area",
      "name": "Living Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.15862696590687975,
        "pitch": 0.6569207544790441,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.801697900164573,
          "pitch": 0.3527602035421271,
          "rotation": 5.497787143782138,
          "target": "5-kitchen"
        },
        {
          "yaw": 0.710013358778367,
          "pitch": 0.29962919799621446,
          "rotation": 0,
          "target": "3-g-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.5779728915048636,
        "pitch": 0.3720885082657226,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.2142600396919665,
          "pitch": 0.4491983230140768,
          "rotation": 5.497787143782138,
          "target": "6-backyard"
        },
        {
          "yaw": 0.02473098889140779,
          "pitch": 0.33715821183720784,
          "rotation": 0,
          "target": "4-living-area"
        },
        {
          "yaw": -0.3797350004394797,
          "pitch": 0.44682146280543833,
          "rotation": 0,
          "target": "8-to-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.3870579199277557,
        "pitch": -0.713098404608111,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 3.1133798469850333,
          "pitch": -0.27991890423738397,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-g-floor",
      "name": "G Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-to-basement",
      "name": "To Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 3.140761298066261,
        "pitch": 1.2181506553160837,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.4859585599956695,
          "pitch": 0.8184177588604129,
          "rotation": 0,
          "target": "9-basement"
        },
        {
          "yaw": -1.682059943457281,
          "pitch": 0.9170426466208106,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.7828487774482635,
        "pitch": 0.6484488064137022,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.3470767796418404,
          "pitch": 0.7554222533602228,
          "rotation": 0.7853981633974483,
          "target": "10-basement"
        },
        {
          "yaw": 2.3556330073052116,
          "pitch": 0.37133587801129764,
          "rotation": 0,
          "target": "13-bedroom-2"
        },
        {
          "yaw": -1.5127158023766079,
          "pitch": 0.2654578990434864,
          "rotation": 0,
          "target": "8-to-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-basement",
      "name": "Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8343479122372432,
        "pitch": 0.11516711326604856,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.8074252718471033,
          "pitch": 0.842516460915741,
          "rotation": 0.7853981633974483,
          "target": "9-basement"
        },
        {
          "yaw": 1.6239520020863232,
          "pitch": 0.23462831167360143,
          "rotation": 0,
          "target": "11-utility-area"
        },
        {
          "yaw": 0.12026029664134263,
          "pitch": 0.2980335625632371,
          "rotation": 0,
          "target": "14-bedroom-3"
        },
        {
          "yaw": 2.69798057645889,
          "pitch": 0.8391127178732809,
          "rotation": 5.497787143782138,
          "target": "8-to-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-utility-area",
      "name": "Utility Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.5803504742523806,
        "pitch": 1.2320248234517557,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.3208967579031778,
          "pitch": 0.29615439848662817,
          "rotation": 0,
          "target": "10-basement"
        },
        {
          "yaw": -1.3918754537620472,
          "pitch": 0.5520317997580939,
          "rotation": 0,
          "target": "12-bathroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8072695776689081,
        "pitch": 1.005342278378384,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.1155463632401528,
          "pitch": 0.5352140558622729,
          "rotation": 0,
          "target": "11-utility-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.1367708651360644,
        "pitch": 0.18127712865675605,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.3239216924110657,
          "pitch": 0.5430720055112594,
          "rotation": 0,
          "target": "9-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.265382620158917,
        "pitch": 0.501291790616543,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 0.9781868195426906,
          "pitch": 0.4464887299906941,
          "rotation": 5.497787143782138,
          "target": "10-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.8817153669115694,
        "pitch": 1.185248466721017,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.1741634632409816,
          "pitch": 0.7005523685903672,
          "rotation": 0,
          "target": "17-bathroom-2"
        },
        {
          "yaw": -2.7098119225580106,
          "pitch": 0.625695722318099,
          "rotation": 5.497787143782138,
          "target": "19-bedroom-5"
        },
        {
          "yaw": 0.32261647359318424,
          "pitch": 1.0697585007656443,
          "rotation": 0.7853981633974483,
          "target": "7-g-floor"
        },
        {
          "yaw": 1.8135560233998476,
          "pitch": 0.4546992907134637,
          "rotation": 0,
          "target": "16-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.3062137968372607,
        "pitch": 1.0057905036132908,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 3.058448375585888,
          "pitch": 0.689150644880197,
          "rotation": 0.7853981633974483,
          "target": "18-bedroom-4"
        },
        {
          "yaw": 1.5789162511036698,
          "pitch": 0.7775860897609945,
          "rotation": 4.71238898038469,
          "target": "20-to-attic"
        },
        {
          "yaw": 0.30823496648441306,
          "pitch": 0.5253281652110235,
          "rotation": 0,
          "target": "15-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.765101393386516,
        "pitch": 0.9199747122736923,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.5108840038008147,
          "pitch": 0.5846477335395477,
          "rotation": 0,
          "target": "15-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.6289587297663886,
        "pitch": 0.4861786672709254,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.9332230389479896,
          "pitch": 0.4501867872582057,
          "rotation": 0,
          "target": "16-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.1536857593638743,
        "pitch": 0.9324140565163468,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 2.317110842528109,
          "pitch": 0.54873030653253,
          "rotation": 0,
          "target": "15-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-to-attic",
      "name": "To Attic",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7968669951998049,
        "pitch": -0.35455628945163475,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": 1.404110337002951,
          "pitch": -0.2818243685739148,
          "rotation": 0,
          "target": "21-attic"
        },
        {
          "yaw": -0.31334130084993816,
          "pitch": 1.0907045217055344,
          "rotation": 0,
          "target": "16-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-attic",
      "name": "Attic",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.9255130463032941,
        "pitch": 0.31064727847583384,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -0.4729263344838408,
          "pitch": 0.3842427830440638,
          "rotation": 0.7853981633974483,
          "target": "23-bedroom-7"
        },
        {
          "yaw": -1.5698742670269112,
          "pitch": 0.2538270021140647,
          "rotation": 0,
          "target": "22-bedroom-6"
        },
        {
          "yaw": -2.7526372102977703,
          "pitch": 1.1184803135262307,
          "rotation": 0.7853981633974483,
          "target": "20-to-attic"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-6",
      "name": "Bedroom 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.7307236654522882,
        "pitch": 0.43968618325744835,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -1.1892909911472174,
          "pitch": 0.2956420508867712,
          "rotation": 0,
          "target": "21-attic"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bedroom-7",
      "name": "Bedroom 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.241044075951514,
        "pitch": 0.7734305650803854,
        "fov": 1.4076648145445332
      },
      "linkHotspots": [
        {
          "yaw": -2.9084849723005046,
          "pitch": 0.3946376580863564,
          "rotation": 0,
          "target": "21-attic"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "12 Manor Drive",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
