# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121229004608) do

  create_table "cookie_cases", :force => true do |t|
    t.string   "name"
    t.string   "quantity"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "site_sale_id"
  end

  create_table "cookie_counts", :force => true do |t|
    t.integer  "cookie_id"
    t.string   "quantity"
    t.integer  "site_sale_id"
    t.string   "type"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "cookie_stores", :force => true do |t|
    t.string   "name"
    t.date     "date"
    t.integer  "cookie_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "cookies", :force => true do |t|
    t.string   "name"
    t.string   "boxes"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "person_id"
    t.integer  "site_sale_id"
  end

  create_table "inventories", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "participants", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone"
    t.boolean  "parent"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "people", :force => true do |t|
    t.string   "name"
    t.boolean  "parent"
    t.string   "phone"
    t.string   "email"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "site_end_counts", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "site_sales", :force => true do |t|
    t.string   "location"
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "cookie_id"
  end

  create_table "site_start_counts", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
