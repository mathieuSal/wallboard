<?php

namespace App\Entity\Bookmark;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 *  Bookmark category entity
 *  @ApiResource
 *  @ORM\Entity
 */
class Bookmark
{
    /**
    * @var int The entity Id
    *
    * @ORM\Id
    * @ORM\GeneratedValue
    * @ORM\Column(type="integer")
    */
    private $id;

    /**
    * @var string bookmark's name
    * 
    * @ORM\Column(type="string")
    * @Assert\NotBlank
    */
    private $name;

    /**
    * @var string bookmark's link
    * 
    * @ORM\Column(type="string")
    * @Assert\NotBlank
    */
    private $link;

    /**
    * @var Date bookmark's creation date
    * 
    * @ORM\Column(type="datetime", options={"default" = "CURRENT_TIMESTAMP"})
    * @Assert\NotBlank
    */
    private $creationDate;

    /**
     * @var boolean
     * 
     * @ORM\Column(type="boolean", options={"default": false})
     */
    private $isFavorite;

    /**
     * @ORM\ManyToOne(targetEntity="BookmarkCategory")
     * @ORM\JoinColumn(name="bookmark_category_id", referencedColumnName="id")
     * @ApiSubresource
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity="BookmarkTag", inversedBy="bookmarks")
     * @ORM\JoinTable(name="bookmarks_bookmark_tags")
     * @ApiSubresource
     */
    private $tags;

    public function __construct() {
      $this->tags = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get the entity Id
     *
     * @return  int
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get bookmark's name
     *
     * @return  string
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Get bookmark's link
     *
     * @return  string
     */ 
    public function getLink()
    {
        return $this->link;
    }

    /**
     * Set bookmark's link
     *
     * @param  string  $link  bookmark's link
     *
     * @return  self
     */ 
    public function setLink(string $link)
    {
        $this->link = $link;

        return $this;
    }

    /**
     * Get bookmark's creation date
     *
     * @return  Date
     */ 
    public function getCreationDate()
    {
        return $this->creationDate;
    }

    /**
     * Set bookmark's creation date
     *
     * @param  Date  $creationDate  bookmark's creation date
     *
     * @return  self
     */ 
    public function setCreationDate(Date $creationDate)
    {
        $this->creationDate = $creationDate;

        return $this;
    }

    /**
     * Get the value of isFavorite
     *
     * @return  boolean
     */ 
    public function getIsFavorite()
    {
        return $this->isFavorite;
    }

    /**
     * Set the value of isFavorite
     *
     * @param  boolean  $isFavorite
     *
     * @return  self
     */ 
    public function setIsFavorite($isFavorite)
    {
        $this->isFavorite = $isFavorite;

        return $this;
    }

    /**
     * Get the value of category
     */ 
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set the value of category
     *
     * @return  self
     */ 
    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get the value of tags
     */ 
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * Set the value of tags
     *
     * @return  self
     */ 
    public function setTags($tags)
    {
        $this->tags = $tags;

        return $this;
    }
}