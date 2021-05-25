# 元素データの作成
#
# type = ELEMENT の共通形式
#
# 原子番号, symbol, weight, denstiy
#     :
#

import datetime

# 元素記号データ
symbol = [
	"H" , "He", "Li", "Be", "B" , "C" , "N" , "O" , "F" , "Ne",
	"Na", "Mg", "Al", "Si", "P" , "S" , "Cl", "Ar", "K" , "Ca",
	"Sc", "Ti", "V" , "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
	"Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y" , "Zr",
	"Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
	"Sb", "Te", "I" , "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
	"Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
	"Lu", "Hf", "Ta", "W" , "Re", "Os", "Ir", "Pt", "Au", "Hg",
	"Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
	"Pa", "U" , "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
	"Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
	"Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
]

# 元素名データ
name = [
	# Z = 1 - 10
	"Hydrogen", "Helium", "Lithium", "Beryllium", "Boron",
	"Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
	# Z = 11 - 20
	"Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorous",
	"Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
	# Z = 21 - 30
	"Scandium", "Titanium", "Vanadium", "Chromium", "Manganese",
	"Iron", "Cobalt", "Nickel", "Copper", "Zinc",
	# Z = 31 - 40
	"Gallium", "Germanium", "Arsenic", "Selenium", "Bromine",
	"Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium",
	# Z = 41 - 50
	"Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium",
	"Palladium", "Silver", "Cadmium", "Indium", "Tin",
	# Z = 51 - 60
	"Antimony", "Tellurium", "Iodine", "Xenon", "Caesium",
	"Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium",
	# Z = 61 - 70
	"Promethium", "Samarium", "Europium", "Gadolinium", "Terbium",
	"Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium",
	# Z = 71 - 80
	"Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium",
	"Osmium", "Iridium", "Platinum", "Gold", "Mercury",
	# Z = 81 - 90
	"Thallium", "Lead", "Bismuth", "Polonium", "Astatine",
	"Radon", "Francium", "Radium", "Actinium", "Thorium",
	# Z = 91 - 100
	"Protoactinium", "Uranium", "Neptunium", "Plutonium", "Americium",
	"Curium", "Berkelium", "Californium", "Einsteinium", "Fermium",
	# Z = 101 - 110
	"Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium",
	"Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium",
	# Z = 111 - 118
	"Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium",
	"Livermorium", "Tennessine", "Organesson"
]

# 原子量データ
# 出典：Dynamic Periodic Table(Jun 16, 2017 updated)より
# https://www.ptable.com/
weight = [
	# Z = 1 - 10
	1.008, 4.0026, 6.94, 9.0122, 10.81,
	12.011, 14.007, 15.999, 18.998, 20.180,
	# Z = 11 - 20
	22.990, 24.305, 26.982, 28.085, 30.974,
	32.06, 35.45, 39.948, 39.098, 40.078,
	# Z = 21 - 30
	44.956, 47.867, 50.942, 51.996, 54.938,
	55.845, 58.933, 58.693, 63.546, 65.38,
	# Z = 31 - 40
	69.723, 72.630, 74.922, 78.971, 79.904,
	83.798, 85.468, 87.62, 88.906, 91.224,
	# Z = 41 - 50
	92.906, 95.95, 98, 101.07, 102.91,
	106.42, 107.87, 112.41, 114.82, 118.71,
	# Z = 51 - 60
	121.76, 127.60, 126.90, 131.29, 132.91,
	137.33, 138.91, 140.12, 140.91, 144.24,
	# Z = 61 - 70
	145, 150.46, 151.96, 157.25, 158.93,
	162.50, 164.93, 167.26, 168.93, 173.05,
	# Z = 71 - 80
	174.97, 178.49, 180.95, 183.84, 186.21,
	190.23, 192.22, 195.08, 196.97, 200.59,
	# Z = 81 - 90
	204.38, 207.2, 208.98, 209, 210,
	222, 223, 226, 227, 230.04,
	# Z = 90 - 100
	231.04, 238.03, 237, 244, 243,
	247, 247, 251, 252, 257,
	# Z = 101 - 110
	258, 259, 266, 267, 268,
	269, 270, 277, 278, 281,
	# Z = 111 - 118
	282, 285, 286, 289, 290,
	293, 294, 294
]

# 密度データ[kg/m^3]
# 密度は標準的な温度と圧力(STP)のものを使用
# 出典：Dynamic Periodic Table(Jun 16, 2017 updated)より
# https://www.ptable.com/
density= [
	# Z = 1 - 10
	0.0899, 0.1785, 535, 1848, 2460,
	2260, 1.251, 1.429, 1.696, 0.9,
	# Z = 11 - 20
	968, 1738, 2700, 2330, 1823,
	1960, 3.214, 1.784, 856, 1550,
	# Z = 21 - 30
	2985, 4507, 6110, 7140, 7470,
	7874, 8900, 8908, 8920, 7140,
	# Z = 31 - 40
	5904, 5323, 5727, 4819, 3210,
	3.75, 1532, 2630, 4472, 6511,
	# Z = 41 - 50
	8570, 10280, 11500, 12370, 12450,
	12023, 10490, 8650, 7310, 7310,
	# Z = 51 - 60
	6697, 6240, 4940, 5.9, 1879,
	3510, 6146, 6689, 6640, 7010,
	# Z = 61 - 70
	7264, 7353, 5244, 7901, 8219,
	8551, 8795, 9066, 9321, 6570,
	# Z = 71 - 80
	9841, 13310, 16650, 19250, 21020,
	22610, 22650, 21090, 19300, 13534,
	# Z = 81 - 90
	11850, 11340, 9780, 9196, -1,
	9.73, -1, 5000, 10070, 11724,
	# Z = 90 - 100
	15370, 19050, 20450, 19816, -1,
	13510, 14780, 15100, -1, -1,
	# Z = 101 - 110
	-1, -1, -1, -1, -1,
	-1, -1, -1, -1, -1,
	# Z = 111 - 118
	-1, -1, -1, -1, -1,
	-1, -1, -1
]

# データを書き出す
print("const table = [")

i = 0
while i < len(symbol):
	s = f" z: {i + 1}, symbol: \"{symbol[i]}\", weight: {weight[i]}"
	print("  {" + s + " },")
	i = i + 1

print("];\n")

"""
const table = [
	{ z: i + 1, symbol: symbol[i}, weight: weight[i] },
]
"""
