<?
/**
*Êëàññ äëÿ ğàáîòû ñ îáúåêòàìè è åãî ïîëÿìè
*/
class MObject{
	protected $_data = array();
	
	public function __call($method,$args){
		$action = substr($method,0,3);
		$key = substr($method,3);
		switch ($action){
			case 'get':
				return $this->getData($key);
			case 'set':
				return $this->satdata($key, $args[0]);
		}
	}
	
	public function __construct($initialData){
		$this->_data = $initialData;
	}
	
	public function setData($key,$value=null){
		if(is_array($key)){
			this->_data = $key; 
		}else{
			this->_data[$key] = $value;
		}
		return this;
	}
	
	public function getData($key=''){
		return ($key) ? $this->_data[$key] : $this->_data;
	}
}