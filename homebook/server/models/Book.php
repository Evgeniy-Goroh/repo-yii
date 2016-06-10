<?php
 
namespace app\models;
use Yii;
 
class Book extends \yii\db\ActiveRecord
{
 
    public static function tableName()
    {
        return 'books';
    }
 
    public function rules()
    {
        return [
            [['Title', 'Author', 'Prewiev'], 'required'],
            [['IMG'], 'string'],
            [['ID','Year'], 'integer'],
            [['Title'], 'string', 'max' => 150],
            [['Author'], 'string', 'max' => 100],
			[['Prewiev'], 'string', 'max' => 2000]
        ];
    }
	
    public function attributeLabels()
    {
        return [
            'ID' => 'ID',
            'Title' => 'Title',
            'Author' => 'Author',
            'Year' => 'Year',
            'Prewiev' => 'Prewiev',
			'IMG' => 'IMG',
        ];
    }
}