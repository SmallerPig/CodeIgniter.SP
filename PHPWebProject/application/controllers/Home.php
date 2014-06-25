<?php

/**
 * Home short summary.
 *
 * Home description.
 *
 * @version 1.0
 * @author smileshute
 */
class Home extends CI_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model('news_model');
        //echo "excution in construct";
    }  

    
    public function index()
    {    
        
        $data['news'] = $this->news_model->get_news();        
        $data['title'] = 'home';
        $data['home_navigation'] ='current';
        $this->load->view('templates/header', $data);
        $this->load->view('templates/navigation', $data);
        $this->load->view('home/index', $data);
        $this->load->view('templates/footer');
    }

    public function view($slug)
    {
        $data['news_item'] = $this->news_model->get_news($slug);        
        
        if (empty($data['news_item']))
        {
            show_404();
        }

        $data['title'] = $data['news_item']['title'];

        $this->load->view('templates/header', $data);
        $this->load->view('news/view', $data);
        $this->load->view('templates/footer');
    }
    
    
    public function get_news($slug = FALSE){
        if ($slug === FALSE)
        {
            $query = $this->db->get('news');
            return $query->result_array();
        }
        
        $query = $this->db->get_where('news', array('slug' => $slug));
        return $query->row_array();
    }
    
    
    
    
}
