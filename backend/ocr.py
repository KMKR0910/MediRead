import easyocr
import cv2
import numpy as np

reader = easyocr.Reader(['en'])


def preprocess_image(image_bytes):

    nparr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    blur = cv2.GaussianBlur(gray, (5,5), 0)

    thresh = cv2.adaptiveThreshold(
        blur,
        255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY,
        11,
        2
    )

    return thresh


def extract_text(image_bytes):

    image = preprocess_image(image_bytes)

    result = reader.readtext(image)

    text = ""

    for detection in result:
        text += detection[1] + " "

    return text