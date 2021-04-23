<?php

/* mcp_header.html */
class __TwigTemplate_805cd8ebc82fb22c341b8bcfefa6271e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $location = "overall_header.html";
        $namespace = false;
        if (strpos($location, '@') === 0) {
            $namespace = substr($location, 1, strpos($location, '/') - 1);
            $previous_look_up_order = $this->env->getNamespaceLookUpOrder();
            $this->env->setNamespaceLookUpOrder(array($namespace, '__main__'));
        }
        $this->env->loadTemplate("overall_header.html")->display($context);
        if ($namespace) {
            $this->env->setNamespaceLookUpOrder($previous_look_up_order);
        }
        // line 2
        echo "
<h3>";
        // line 3
        echo $this->env->getExtension('phpbb')->lang("MCP");
        echo "</h3>

";
        // line 5
        if ((isset($context["U_MCP"]) ? $context["U_MCP"] : null)) {
            // line 6
            echo "\t<p class=\"btn-group\">
\t\t";
            // line 7
            if ((isset($context["U_ACP"]) ? $context["U_ACP"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_ACP"]) ? $context["U_ACP"] : null);
                echo "\" class=\"btn btn-default\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("ACP");
                echo "\" data-responsive-text=\"";
                echo $this->env->getExtension('phpbb')->lang("ACP_SHORT");
                echo "\">";
                echo $this->env->getExtension('phpbb')->lang("ACP");
                echo "</a>";
            }
            echo "<a href=\"";
            echo (isset($context["U_MCP"]) ? $context["U_MCP"] : null);
            echo "\" class=\"btn btn-default\" title=\"";
            echo $this->env->getExtension('phpbb')->lang("MCP");
            echo "\" data-responsive-text=\"";
            echo $this->env->getExtension('phpbb')->lang("MCP_SHORT");
            echo "\">";
            echo $this->env->getExtension('phpbb')->lang("MCP");
            echo "</a>";
            if ((isset($context["U_MCP_FORUM"]) ? $context["U_MCP_FORUM"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_MCP_FORUM"]) ? $context["U_MCP_FORUM"] : null);
                echo "\" class=\"btn btn-default\">";
                echo $this->env->getExtension('phpbb')->lang("MODERATE_FORUM");
                echo "</a>";
            }
            if ((isset($context["U_MCP_TOPIC"]) ? $context["U_MCP_TOPIC"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_MCP_TOPIC"]) ? $context["U_MCP_TOPIC"] : null);
                echo "\" class=\"btn btn-default\">";
                echo $this->env->getExtension('phpbb')->lang("MODERATE_TOPIC");
                echo "</a>";
            }
            if ((isset($context["U_MCP_POST"]) ? $context["U_MCP_POST"] : null)) {
                echo "<a href=\"";
                echo (isset($context["U_MCP_POST"]) ? $context["U_MCP_POST"] : null);
                echo "\" class=\"btn btn-default\">";
                echo $this->env->getExtension('phpbb')->lang("MODERATE_POST");
                echo "</a>";
            }
            // line 8
            echo "\t</p>
";
        }
        // line 10
        echo "
\t<ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">
\t\t";
        // line 12
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "l_block1"));
        foreach ($context['_seq'] as $context["_key"] => $context["l_block1"]) {
            // line 13
            echo "\t\t<li class=\"tab";
            if ($this->getAttribute((isset($context["l_block1"]) ? $context["l_block1"] : null), "S_SELECTED")) {
                echo " active";
            }
            echo "\"><a href=\"";
            echo $this->getAttribute((isset($context["l_block1"]) ? $context["l_block1"] : null), "U_TITLE");
            echo "\">";
            echo $this->getAttribute((isset($context["l_block1"]) ? $context["l_block1"] : null), "L_TITLE");
            echo "</a></li>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['l_block1'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 15
        echo "\t</ul>

\t<div id=\"cp-menu\">
\t\t<ul id=\"navigation\" class=\"nav nav-pills\" role=\"menu\">
\t\t";
        // line 19
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "l_block1"));
        foreach ($context['_seq'] as $context["_key"] => $context["l_block1"]) {
            // line 20
            echo "\t\t";
            if ($this->getAttribute((isset($context["l_block1"]) ? $context["l_block1"] : null), "S_SELECTED")) {
                // line 21
                echo "\t\t\t";
                $context['_parent'] = (array) $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["l_block1"]) ? $context["l_block1"] : null), "l_block2"));
                foreach ($context['_seq'] as $context["_key"] => $context["l_block2"]) {
                    // line 22
                    echo "\t\t\t";
                    if ($this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "S_SELECTED")) {
                        // line 23
                        echo "\t\t\t<li class=\"active\"><a href=\"";
                        echo $this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "U_TITLE");
                        echo "\"><span>";
                        echo $this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "L_TITLE");
                        if ($this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "ADD_ITEM")) {
                            echo " (";
                            echo $this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "ADD_ITEM");
                            echo ")";
                        }
                        echo "</span></a></li>
\t\t\t";
                    } else {
                        // line 25
                        echo "\t\t\t<li><a href=\"";
                        echo $this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "U_TITLE");
                        echo "\"><span>";
                        echo $this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "L_TITLE");
                        if ($this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "ADD_ITEM")) {
                            echo " (";
                            echo $this->getAttribute((isset($context["l_block2"]) ? $context["l_block2"] : null), "ADD_ITEM");
                            echo ")";
                        }
                        echo "</span></a></li>
\t\t\t";
                    }
                    // line 27
                    echo "\t\t\t";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['l_block2'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 28
                echo "\t\t";
            }
            // line 29
            echo "\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['l_block1'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 30
        echo "\t\t</ul>
\t</div>

\t<div id=\"cp-main\" class=\"mcp-main panel-container\">
\t\t";
        // line 34
        if ((isset($context["MESSAGE"]) ? $context["MESSAGE"] : null)) {
            // line 35
            echo "\t\t<div class=\"panel panel-default\">
\t\t\t<div class=\"panel-heading\">
\t\t\t\t<h4 class=\"panel-title\">";
            // line 37
            echo $this->env->getExtension('phpbb')->lang("MESSAGE");
            echo "</h4>
\t\t\t</div>
\t\t\t<div class=\"panel-body\">
\t\t\t\t<p class=\"alert alert-danger\">";
            // line 40
            echo (isset($context["MESSAGE"]) ? $context["MESSAGE"] : null);
            echo "</p>
\t\t\t";
            // line 41
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "return_links"));
            foreach ($context['_seq'] as $context["_key"] => $context["return_links"]) {
                echo $this->getAttribute((isset($context["return_links"]) ? $context["return_links"] : null), "MESSAGE_LINK");
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['return_links'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 42
            echo "\t\t\t</div>
\t\t</div>
\t\t";
        }
    }

    public function getTemplateName()
    {
        return "mcp_header.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  197 => 41,  193 => 40,  187 => 37,  183 => 35,  181 => 34,  175 => 30,  169 => 29,  166 => 28,  160 => 27,  147 => 25,  134 => 23,  126 => 21,  123 => 20,  119 => 19,  113 => 15,  98 => 13,  94 => 12,  86 => 8,  44 => 7,  41 => 6,  1150 => 346,  1147 => 345,  1133 => 344,  1130 => 343,  1126 => 341,  1117 => 337,  1111 => 333,  1102 => 330,  1099 => 329,  1091 => 326,  1069 => 325,  1060 => 324,  1055 => 323,  1048 => 319,  1044 => 318,  1034 => 310,  1025 => 307,  1022 => 306,  1008 => 303,  996 => 302,  987 => 301,  982 => 300,  975 => 296,  971 => 295,  961 => 289,  944 => 288,  922 => 286,  917 => 285,  913 => 283,  911 => 282,  908 => 281,  903 => 278,  888 => 276,  870 => 275,  866 => 274,  860 => 271,  856 => 269,  854 => 268,  851 => 267,  840 => 259,  836 => 258,  832 => 257,  821 => 249,  814 => 245,  809 => 242,  805 => 240,  799 => 237,  795 => 236,  792 => 235,  790 => 234,  785 => 231,  777 => 229,  774 => 228,  766 => 227,  756 => 226,  752 => 225,  745 => 221,  741 => 219,  739 => 218,  734 => 216,  730 => 214,  728 => 213,  725 => 212,  722 => 210,  719 => 209,  715 => 207,  682 => 206,  679 => 205,  677 => 204,  674 => 203,  668 => 199,  661 => 195,  654 => 192,  647 => 191,  631 => 190,  624 => 187,  616 => 183,  614 => 182,  611 => 181,  604 => 177,  594 => 172,  590 => 171,  575 => 166,  572 => 165,  563 => 161,  557 => 159,  554 => 158,  552 => 157,  545 => 154,  543 => 153,  536 => 149,  532 => 147,  530 => 146,  522 => 140,  518 => 138,  515 => 137,  498 => 136,  476 => 134,  467 => 133,  464 => 132,  462 => 131,  459 => 130,  451 => 128,  449 => 127,  446 => 126,  442 => 124,  433 => 123,  429 => 122,  426 => 121,  424 => 120,  421 => 119,  416 => 116,  407 => 114,  403 => 113,  399 => 112,  394 => 111,  392 => 110,  386 => 107,  382 => 105,  374 => 102,  371 => 101,  369 => 100,  366 => 99,  359 => 95,  354 => 94,  350 => 93,  346 => 92,  342 => 91,  335 => 88,  328 => 84,  323 => 83,  319 => 82,  315 => 81,  311 => 80,  304 => 77,  302 => 76,  299 => 75,  295 => 73,  264 => 72,  233 => 71,  230 => 70,  228 => 69,  224 => 67,  214 => 64,  209 => 63,  206 => 42,  192 => 60,  178 => 58,  176 => 57,  165 => 51,  151 => 50,  146 => 47,  140 => 45,  131 => 22,  127 => 38,  122 => 37,  116 => 35,  114 => 34,  109 => 32,  102 => 27,  96 => 25,  90 => 10,  88 => 22,  85 => 21,  79 => 19,  77 => 18,  67 => 17,  56 => 12,  51 => 9,  45 => 7,  39 => 5,  36 => 4,  34 => 3,  31 => 2,  19 => 1,);
    }
}
