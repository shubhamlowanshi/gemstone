-- Seed data for GemStone Palace

-- Insert categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('Diamonds', 'diamonds', 'Premium quality diamonds with exceptional brilliance', '/placeholder.svg?height=200&width=300'),
('Rubies', 'rubies', 'Stunning red rubies from the finest sources worldwide', '/placeholder.svg?height=200&width=300'),
('Sapphires', 'sapphires', 'Beautiful sapphires in various colors and cuts', '/placeholder.svg?height=200&width=300'),
('Emeralds', 'emeralds', 'Exquisite emeralds with vibrant green hues', '/placeholder.svg?height=200&width=300'),
('Other Gemstones', 'other-gemstones', 'Rare and beautiful gemstones from around the world', '/placeholder.svg?height=200&width=300');

-- Insert products
INSERT INTO products (name, slug, description, short_description, price, original_price, category_id, type, carat, color, origin, certification, clarity, cut, stock_quantity, status, featured, images, specifications) VALUES
('Royal Blue Sapphire', 'royal-blue-sapphire', 'A magnificent royal blue sapphire with exceptional clarity and brilliance. This stunning gemstone features a deep, velvety blue color that is highly prized by collectors and jewelry enthusiasts alike.', 'Magnificent royal blue sapphire with exceptional clarity', 2500.00, 3000.00, 3, 'Sapphire', 2.50, 'Blue', 'Ceylon', 'GIA', 'VS1', 'Oval', 5, 'active', true, '[""/placeholder.svg?height=400&width=400""]', '{"hardness": "9", "refractive_index": "1.762-1.770", "specific_gravity": "4.00"}'),

('Emerald Cut Diamond', 'emerald-cut-diamond', 'A breathtaking emerald cut diamond with exceptional fire and brilliance. This classic cut showcases the diamond''s clarity and creates stunning light reflection patterns.', 'Breathtaking emerald cut diamond with exceptional fire', 5500.00, 6200.00, 1, 'Diamond', 1.80, 'Colorless', 'South Africa', 'GIA', 'VVS2', 'Emerald', 2, 'active', true, '[""/placeholder.svg?height=400&width=400""]', '{"hardness": "10", "refractive_index": "2.417", "specific_gravity": "3.52"}'),

('Burmese Ruby', 'burmese-ruby', 'An exquisite Burmese ruby with the coveted "pigeon blood" red color. This rare gemstone displays exceptional saturation and brilliance, making it a true collector''s piece.', 'Exquisite Burmese ruby with pigeon blood red color', 3200.00, 3800.00, 2, 'Ruby', 2.20, 'Red', 'Myanmar', 'GRS', 'VS2', 'Cushion', 3, 'active', true, '[""/placeholder.svg?height=400&width=400""]', '{"hardness": "9", "refractive_index": "1.762-1.770", "specific_gravity": "4.00"}'),

('Colombian Emerald', 'colombian-emerald', 'A stunning Colombian emerald with vivid green color and excellent transparency. This premium gemstone showcases the characteristic beauty that makes Colombian emeralds the most sought-after in the world.', 'Stunning Colombian emerald with vivid green color', 4200.00, 4800.00, 4, 'Emerald', 3.10, 'Green', 'Colombia', 'GRS', 'VS1', 'Oval', 4, 'active', false, '[""/placeholder.svg?height=400&width=400""]', '{"hardness": "7.5-8", "refractive_index": "1.565-1.602", "specific_gravity": "2.70"}'),

('Pink Tourmaline', 'pink-tourmaline', 'A beautiful pink tourmaline with exceptional clarity and vibrant color. This gemstone displays a lovely pink hue that ranges from soft rose to intense magenta.', 'Beautiful pink tourmaline with exceptional clarity', 1800.00, 2200.00, 5, 'Tourmaline', 4.20, 'Pink', 'Brazil', 'GIA', 'VVS1', 'Cushion', 6, 'active', false, '[""/placeholder.svg?height=400&width=400""]', '{"hardness": "7-7.5", "refractive_index": "1.624-1.644", "specific_gravity": "3.06"}'),

('Yellow Citrine', 'yellow-citrine', 'A radiant yellow citrine with warm golden tones and excellent brilliance. This affordable gemstone offers beautiful color and clarity, perfect for everyday wear or special occasions.', 'Radiant yellow citrine with warm golden tones', 800.00, 1000.00, 5, 'Citrine', 5.50, 'Yellow', 'Brazil', 'GIA', 'VS1', 'Round', 8, 'active', false, '[""/placeholder.svg?height=400&width=400""]', '{"hardness": "7", "refractive_index": "1.544-1.553", "specific_gravity": "2.65"}');

-- Insert admin user (password: admin123)
INSERT INTO users (email, password_hash, name, role, phone) VALUES
('admin@gemstone.com', '$2b$10$rOzJqQqQqQqQqQqQqQqQqO', 'Admin User', 'admin', '+1-555-123-4567');

-- Insert sample customer
INSERT INTO users (email, password_hash, name, role, phone) VALUES
('john.doe@example.com', '$2b$10$rOzJqQqQqQqQqQqQqQqQqO', 'John Doe', 'user', '+1-555-987-6543');

-- Insert sample orders
INSERT INTO orders (user_id, order_number, status, subtotal, tax_amount, shipping_amount, total_amount, payment_method, payment_status, shipping_address, billing_address) VALUES
(2, 'ORD-001', 'pending', 2500.00, 200.00, 0.00, 2700.00, 'card', 'pending', '{"firstName": "John", "lastName": "Doe", "address": "123 Main St", "city": "New York", "state": "NY", "zipCode": "10001", "country": "United States"}', '{"firstName": "John", "lastName": "Doe", "address": "123 Main St", "city": "New York", "state": "NY", "zipCode": "10001", "country": "United States"}'),
(2, 'ORD-002', 'shipped', 5500.00, 440.00, 0.00, 5940.00, 'paypal', 'completed', '{"firstName": "John", "lastName": "Doe", "address": "123 Main St", "city": "New York", "state": "NY", "zipCode": "10001", "country": "United States"}', '{"firstName": "John", "lastName": "Doe", "address": "123 Main St", "city": "New York", "state": "NY", "zipCode": "10001", "country": "United States"}');

-- Insert order items
INSERT INTO order_items (order_id, product_id, quantity, price, total) VALUES
(1, 1, 1, 2500.00, 2500.00),
(2, 2, 1, 5500.00, 5500.00);

-- Insert sample reviews
INSERT INTO reviews (user_id, product_id, rating, title, comment, verified_purchase, status) VALUES
(2, 1, 5, 'Absolutely stunning!', 'This sapphire exceeded all my expectations. The color is incredible and the quality is outstanding.', true, 'approved'),
(2, 2, 5, 'Perfect diamond', 'Beautiful emerald cut diamond with amazing brilliance. Highly recommended!', true, 'approved');
