import fitz  # PyMuPDF

def edit_certificate_name(pdf_path, output_path, old_name, new_name, font_path):
    # เปิดไฟล์ PDF
    doc = fitz.open(pdf_path)
    
    # เลือกหน้าแรก (ปกติใบเซอร์มีหน้าเดียว หรือหน้าแรก)
    page = doc[0]
    
    # ค้นหาตำแหน่งของชื่อเดิม
    text_instances = page.search_for(old_name)
    
    if not text_instances:
        print(f"ไม่พบข้อความ: {old_name}")
        return

    # เริ่มกระบวนการแก้ไข
    for rect in text_instances:
        print(f"Found name at: {rect}")
        
        # 1. ลบชื่อเดิม (วาดสี่เหลี่ยมสีขาวทับ)
        # ขยายพื้นที่เล็กน้อยเพื่อให้ทับมิดชิด (x0, y0, x1, y1)
        clean_rect = fitz.Rect(rect.x0 - 5, rect.y0 - 2, rect.x1 + 5, rect.y1 + 2)
        page.draw_rect(clean_rect, color=(1, 1, 1), fill=(1, 1, 1))
        
        # 2. คำนวณตำแหน่งกึ่งกลางสำหรับชื่อใหม่
        # หาจุด Center ของกล่องข้อความเดิม
        center_x = (rect.x0 + rect.x1) / 2
        bottom_y = rect.y1  # ฐานของตัวอักษร
        
        # 3. ใส่ชื่อใหม่เข้าไป
        # หมายเหตุ: ต้องกะขนาด fontsize ให้ใกล้เคียงของเดิม (ในรูปน่าจะประมาณ 30-36)
        page.insert_text(
            (rect.x0, bottom_y - 3), # ปรับตำแหน่ง Y ขึ้นลงเล็กน้อยตามฟอนต์
            new_name,
            fontname="Sarabun", # ตั้งชื่อ alias ให้ฟอนต์
            fontfile=font_path, # path ของไฟล์ฟอนต์ .ttf
            fontsize=30,        # <-- ปรับขนาดตัวอักษรตรงนี้
            color=(0.13, 0.18, 0.29) # สีน้ำเงินเข้ม (RGB 0-1) หรือใส่ (0,0,0) เป็นสีดำ
        )

    # บันทึกไฟล์ใหม่
    doc.save(output_path)
    print(f"บันทึกไฟล์เรียบร้อยแล้วที่: {output_path}")

# --- การตั้งค่า ---
input_pdf = "original.pdf"           # ชื่อไฟล์ PDF ต้นฉบับของคุณ
output_pdf = "certificate_edited.pdf" # ชื่อไฟล์ที่จะเซฟออกมา
font_file = "THSarabunNew.ttf"       # ต้องมีไฟล์ฟอนต์นี้ในโฟลเดอร์
old_text = "นาย ปัณณวัฒน์ เจียมตน"
new_text = "สุนทร แซ่อึ้ง"

# รันฟังก์ชัน
try:
    edit_certificate_name(input_pdf, output_pdf, old_text, new_text, font_file)
except Exception as e:
    print(f"Error: {e}")
    print("คำแนะนำ: ตรวจสอบว่ามีไฟล์ PDF และไฟล์ Font อยู่ในโฟลเดอร์ถูกต้องหรือไม่")
